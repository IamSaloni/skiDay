import React from "react";

// import StudentList from "./Components/StudentList"
import SkiDayList from "./Components/SkiDayList";
import SkiDayCount from "./Components/SkiDayCount";
import AddDayForm from "./Components/AddDayForm";
import Menu from "./Components/Menu";
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
    if (cond) {
      return this.state.allSkiDays.filter((skiDay, index) => {
        return skiDay[cond];
      }).length;
    } else {
      return this.state.allSkiDays.length;
    }
  }

  render() {
    return (
      <div className="app">
        <Menu />
        {this.props.location.pathname === "/list-days" ? (
          <SkiDayCount
            total={this.countDays()}
            powder={this.countDays("powder")}
            backcountry={this.countDays("backcountry")}
            goal={100}
          />
        ) : this.props.location.pathname === "/add-day" ? (
          <AddDayForm />
        ) : (
          <SkiDayList
            days={this.state.allSkiDays}
          />
        )}
      </div>
    );
  }
}

export default App;
