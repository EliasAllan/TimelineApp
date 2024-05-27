import './timeline.css'
import moments from '../../assets/momentData.json'
import Timeline from '../../components/timeline';

function Home() {
  
    return (
      <>
       <link rel="stylesheet" href="timeline.css"></link>
        <h3 class="hints">
      Click on given circles to see more info
    </h3>

    {/* {{#if logged_in}}
<button onclick="window.location.href='/newmoment'" id="add-moment-btn">Add a moment in time</button>
    {{/if}} */}
    
    <button id="get-history">What else happened on this day ?</button>
    
    <p id="historical">
    </p>

    <Timeline/>
    </>
    )
  }
  
  export default Home