// Import express
const express = require('express');
// Import the Apollo Server from the newer package

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// // Import the two parts of GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 5173;
const app = express();

app.use(express.json());
// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Function to start Apollo Server
const startApolloServer = async () => {
  await server.start();

  // Apply Apollo Server middleware with context
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // Express middlewares
  app.use(express.urlencoded({ extended: false }));

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  // Fallback to index.html for client-side routing
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  // Start the server once the database connection is open
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
