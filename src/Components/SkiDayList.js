import React from 'react'
// import {MdTerrain} from 'react-icons/md'
// import {TiWeatherSnow} from 'react-icons/ti'
// import {FaCalendarAlt} from 'react-icons/fa'
import SkiDayRow from './SkiDayRow'
import PropTypes from 'prop-types';

const SkiDayList = ({days}) => ( //props.days
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
            {days.map((day, i) => <SkiDayRow key={i}
                            // resort={day.resort}
                            // date={day.date}
                            // powder={day.powder}
                            // backcountry={day.backcountry}
                            {...day} />
            )}
        </tbody>
    </table>
)


SkiDayList.propTypes = {
    days: PropTypes.array
}
export default SkiDayList

