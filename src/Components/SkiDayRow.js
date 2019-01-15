import React from 'react'
import { MdTerrain } from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
// import { FaCalendarAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';

const SkiDayRow = ({date,resort,powder,backcountry}) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <TiWeatherSnow /> : null}
        </td>
        <td>
            {(backcountry) ? <MdTerrain /> : null}
        </td>
    </tr>
)

SkiDayRow.defaultProps = {
    date: new Date(),
    resort:"Name not Defined",
    powder:null,
    backcountry:null
}

SkiDayRow.propTypes = {
        date: PropTypes.object,
        resort:PropTypes.string,
        powder:PropTypes.bool,
        backcountry:PropTypes.bool
}
export default SkiDayRow