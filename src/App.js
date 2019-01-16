
import React, {Fragment} from "react";

// import StudentList from "./Components/StudentList"
import SkiDayList from "./Components/SkiDayList"
import SkiDayCount from "./Components/SkiDayCount"
import { all } from "q";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: "Squaw Valley",
          date: new Date("2019-1-14"),
          powder: true,
          backcountry: false
        },
        {
          resort: "Kirkwood",
          date: new Date("2019-1-15"),
          powder: false,
          backcountry: true
        },
        {
          resort: "Mt. Tallac",
          date: new Date("2019-1-18"),
          powder: false,
          backcountry: true
        }
      ]
    };
    this.countDays = this.countDays.bind(this);
  }

  countDays(cond) {
    // cond = "powder", "backcountry", undefined
    if(cond) {
      return this.state.allSkiDays.filter((skiDay, index) => {
            //return skiday.powder, siDay.backcountry // we didnt use this to use the cond variable passed in function
            return skiDay[cond];
          }).length;
    }
    else {
          return this.state.allSkiDays.length
    }
  }


  render() {
    return (
      <Fragment>
        <SkiDayList days={this.state.allSkiDays} />
        <SkiDayCount
          total={this.countDays()}
          powder={this.countDays("powder")}
          backcountry={this.countDays("backcountry")}
          goal={100}
        />
      </Fragment>
    );
  }
}



export default App;



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


                  //allskiDays
                  // if that skiday is powder day
                  //