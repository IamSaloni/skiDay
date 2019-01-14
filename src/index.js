import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SkiDayCount from './Components/SkiDayCount'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SkiDayCount total={50}
    powder={20}
    backcountry={10}
    goal={100} />,
    document.getElementById('react-container'));


serviceWorker.unregister();
