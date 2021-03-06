import React from 'react'
import '../stylesheets/ui.scss'
import {MdTerrain} from 'react-icons/md'
import {TiWeatherSnow} from 'react-icons/ti'
import {FaCalendarAlt} from 'react-icons/fa'
import PropTypes from 'prop-types';

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal) ///50z%
}

const SkiDayCount = ({total, powder, backcountry, goal}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <TiWeatherSnow />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <MdTerrain />
            <span>days</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>

    </div>
);

SkiDayCount.defaultProps = {
    total:70,
    powder: 10,
    backcountry:20,
    goal:100
}

SkiDayCount.propTypes={
    total:PropTypes.number,
    powder:PropTypes.number,
    backcountry:PropTypes.number,
    goal: PropTypes.number
}



export default SkiDayCount