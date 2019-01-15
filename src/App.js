
import React, {Fragment} from "react";

// import StudentList from "./Components/StudentList"
import SkiDayList from "./Components/SkiDayList"
import SkiDayCount from "./Components/SkiDayCount"

class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  allSkiDays : [
                        {
                            resort: "Squaw Valley",
                            date: new Date("2019-1-14"),
                            powder:true,
                            backcountry:false
                        },
                        {
                            resort: "Kirkwood",
                            date: new Date("2019-1-15"),
                            powder:false,
                            backcountry:false
                        },
                        {
                            resort: "Mt. Tallac",
                            date: new Date("2019-1-18"),
                            powder:false,
                            backcountry:true
                        },
                    ]
            }
      }
      render() {
            return (
                  // <StudentList
                  //       students={[
                  //             {
                  //                   "name": "Hall Parker",
                  //                   "id": 1,
                  //                   "standard": "10th"
                  //             },
                  //             {
                  //                   "name": "Terrie Underwood",
                  //                   "id": 2,
                  //                   "standard": "10th"
                  //             }, {
                  //                   "name": "Hall Parker",
                  //                   "id": 4,
                  //                   "standard": "10th"
                  //             }]
                  //       }
                  // />
                  <Fragment>
                  <SkiDayList days={
                        this.state.allSkiDays
                    } />
                  <SkiDayCount />
                  </Fragment>
            )
      }
}



export default App;
