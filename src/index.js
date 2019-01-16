import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SkiDayCount from './Components/SkiDayCount'
import * as serviceWorker from './serviceWorker';
// import SkiDayList from './Components/SkiDayList'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Error404 from './Components/Error404'
import StudentList from './Components/StudentList';
import Houses from './Components/Houses';

// ReactDOM.render(

//     <SkiDayList days={
//         [
//             {
//                 resort: "Squaw Valley",
//                 date: new Date("2019-1-14"),
//                 powder:true,
//                 backcountry:false
//             },
//             {
//                 resort: "Kirkwood",
//                 date: new Date("2019-1-15"),
//                 powder:false,
//                 backcountry:false
//             },
//             {
//                 resort: "Mt. Tallac",
//                 date: new Date("2019-1-18"),
//                 powder:false,
//                 backcountry:true
//             },
//         ]
//     } />,
//     document.getElementById('react-container'));

ReactDOM.render(

   <Router>
       <div>
            <Route path="/" exact  component={App} />
            <Route path="/student"  component={StudentList} />
            <Route path="/houses"  component={Houses} />
            <Route path="*" exact component={Error404} />
        </div>
   </Router>,

    document.getElementById('react-container'));

serviceWorker.unregister();

{/* //going to handle rendering the app first routr
second route will going to render the any sort of wild cards
History going to listen to the browser address bar for and changes and it will keep track of those changes*/ }
