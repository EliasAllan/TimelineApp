import React from 'react';
import './timelineStyle.css'
import moments from '../../assets/momentData.json'
import Timeline from '../../components/timeline.jsx';

function TimelinePage() {
  
    return (
      <>
       <link rel="stylesheet" href="timeline.css"></link>

 
    
    <button id="get-history">What else happened on this day ?</button>
    
    <p id="historical">
    </p>

    <Timeline/>

    </>
    
    )
  }
  
  export default TimelinePage