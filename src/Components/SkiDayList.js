import React from 'react'
// import {MdTerrain} from 'react-icons/md'
// import {TiWeatherSnow} from 'react-icons/ti'
// import {FaCalendarAlt} from 'react-icons/fa'
import SkiDayRow from './SkiDayRow'

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
                            resort={day.resort}
                            date={day.date}
                            powder={day.powder}
                            backcountry={day.backcountry}
                            />
            )}
        </tbody>
    </table>
)

export default SkiDayList