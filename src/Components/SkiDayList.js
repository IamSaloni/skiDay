import React from "react";
import SkiDayRow from "./SkiDayRow";
import PropTypes from "prop-types";

const SkiDayList = (
  { days } //props.days
) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>Backcountry</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) => (
        <SkiDayRow key={i} {...day} />
      ))}
    </tbody>
  </table>
);

SkiDayList.propTypes = {
  days: PropTypes.array
};
export default SkiDayList;
