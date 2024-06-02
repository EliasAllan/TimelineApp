import react from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  // const items = [{
  //     title: "May 1940",
  //     cardTitle: "Dunkirk",
  //     url: "http://www.history.com",
  //     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  //     media: {
  //       type: "IMAGE",
  //       source: {
  //         url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif"
  //       }
  //     }
  //   }];

  //   return (
  //     <div style={{ width: "500px", height: "400px" }}>
  //       <Chrono items={items} />
  //     </div>
  //   )
  const items = [
    {
      // date:"2023-07-24",
      // title: "Powering through development.",
      // cardTitle: "In need of some inspiration, or even better, discipline.",
      // details: "Late night coding session , 3 days till BIG DUB (the local rave). Hopefully that'll give me the inspiration I need.",
      // user_id: "2"
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://media1.tenor.com/m/B2QvI4xBIKMAAAAC/funny-weird.gif",
        },
      },
    },
  ];
  return (
    <div style={{ width: "100vw", height: "100vw" }}>
      <Chrono items={items} enableDarkToggle={true} lineWidth={3}/>
    </div>
  );
};
export default Timeline;
