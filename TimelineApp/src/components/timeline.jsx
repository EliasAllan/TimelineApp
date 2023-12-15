import react from "react"
import { Chrono } from "react-chrono"

const Timeline = () => {
    const moments = [{
        // date:"2023-07-24",
        // title: "Powering through development.",
        // cardTitle: "In need of some inspiration, or even better, discipline.",
        // details: "Late night coding session , 3 days till BIG DUB (the local rave). Hopefully that'll give me the inspiration I need.",
        // user_id: "2"
        title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://drive.google.com/file/d/0B_566pSbggqLLVBzQ3ZSUHBKRDg/view?usp=drive_link&resourcekey=0-HXU6FMKOb-HTKfyA5JA_XA"
        }
      }
    }]
    return (
        <div style={{ width: "500px", height: "400px" }}>
        <Chrono moments={moments} />
      </div>
    )
}
export default Timeline