import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chpater_06/NotificationList';
// import Accomodate from './chapter_07/Accomodate';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chpater_09/LandingPage';

// import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';


  ReactDOM.render(
    <React.StrictMode>
      <DarkOrLight />
    </React.StrictMode>,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
