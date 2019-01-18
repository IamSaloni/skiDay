import React from "react";
import SkiDayRow from "./SkiDayRow";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SkiDayList = (
  { days } //props.days
) =>  (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="list-days">All Days</Link>
              <Link to="/list-days/powder">Powder Days</Link>
              <Link to="/list-days/backcountry">Backcountry Days</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {days.map((day, i) => (
            <SkiDayRow key={i} {...day} />
          ))}
        </tbody>
      </table>
    </div>
  );


SkiDayList.propTypes = {
  days: PropTypes.array
};
export default SkiDayList;
