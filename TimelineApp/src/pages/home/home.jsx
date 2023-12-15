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

    <div class="timeline-wrapper">
      <ul class="timeline">
        <Timeline/>
        {/* {{#each moments as |moment| }}
        <li data-date="{{moment.date}}">
          <span class="title">{{moment.title}}</span>
          <div id="moment-dots" class="data show">
            <h3 class="description">{{moment.description}}</h3>
            <small class="date"> {{moment.date}}</small>
            <p class="^details">
              {{moment.details}}
            </p>
            <button data-id={{moment.id}}>What else happened on this day ?</button>


            {{!-- <span class="close">Click to close</span> --}}
          </div>
        </li>
        {{/each}} */}
    
      </ul>
    </div>
      </>
    )
  }
  
  export default Home