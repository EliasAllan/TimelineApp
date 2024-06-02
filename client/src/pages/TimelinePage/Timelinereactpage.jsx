import React from 'react';
import './timelineStyle.css'
import moments from '../../assets/momentData.json'
import Timeline from '../../components/Timeline/timeline.jsx';

function TimelinePage() {
  
    return (
      <>
       <link rel="stylesheet" href="timeline.css"></link>

       <h3 class="hints">
      Click on given circles to see more info
    <button id="get-history">What else happened on this day ?</button>
    </h3>

    {/* {{#if logged_in}}
<button onclick="window.location.href='/newmoment'" id="add-moment-btn">Add a moment in time</button>
    {{/if}} */}
    
    
    <p id="historical">
    </p>

    <Timeline/>

    </>
    
    )
  }
  
  export default TimelinePage