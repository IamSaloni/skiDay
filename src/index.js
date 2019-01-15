import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SkiDayCount from './Components/SkiDayCount'
import * as serviceWorker from './serviceWorker';
import SkiDayList from './Components/SkiDayList'

ReactDOM.render(

    <SkiDayList days={
        [
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
            }
        ]
    } />,
    document.getElementById('react-container'));

// ReactDOM.render(

//     <App />,
//     document.getElementById('react-container'));

serviceWorker.unregister();
