import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SkiDayCount from './Components/SkiDayCount'
import * as serviceWorker from './serviceWorker';
// import SkiDayList from './Components/SkiDayList'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Error404 from './Components/Error404'
import StudentList from './Components/StudentList';
import Houses from './Components/Houses';

ReactDOM.render(

   <Router>
       <div>
       <Switch>
            <Route path="/" exact  component={App} />
            <Route path="/student"  component={App} />
            <Route path="/list-days" component={App}/>
            <Route path=":filter" component={App}/>
            <Route path="/add-day" component={App}/>
            <Route path="/houses"  component={Houses} />
            <Route component={Error404} />
            </Switch>
        </div>
   </Router>,

    document.getElementById('react-container'));

serviceWorker.unregister();

{/* //going to handle rendering the app first routr
second route will going to render the any sort of wild cards
History going to listen to the browser address bar for and changes and it will keep track of those changes*/ }
