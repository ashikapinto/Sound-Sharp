import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import ViewForm from "./components/ViewForm";

import AddComment from './components/AddComment';
import SongsForm from "./components/SongsForm";
import CommentSection from "./components/CommentSection";




ReactDOM.render(
<div>

<BrowserRouter>
  <nav  className="navbar navbar-expand-sm bg-dark fixed-top" >



  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link colorit "  href="http://localhost:3000/songs">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link colorit"  href="http://localhost:3000/addSong">Addnew</a>
    </li>
  </ul>


</nav>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<h1 className="websitename">Sound Sharp</h1>
<Route path='/edit/:id' component={ ViewForm }></Route>
<Route path='/addSong' component={ SongsForm }></Route>
<Route path='/comment/:id' component={ CommentSection }></Route>
<Route path='/songs' component={ App }></Route>
<Route path='/addcomment/:id' component={ AddComment }></Route>
</BrowserRouter>

</div>


  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//
// <div>
// <ul >
// <div >
// <a href="#">SOUND SHARP</a>
// </div>
//
// <li ><a href="http://localhost:3000/songs">Home</a></li>
// <li  ><a href="http://localhost:3000/addSong">Addnew</a></li>
// <li  ><a href="http://localhost:8000/accounts/logout">Logout</a></li>
// </ul>
//   <BrowserRouter>
//   <Route path='/edit/:id' component={ ViewForm }></Route>
//   <Route path='/addSong' component={ SongsForm }></Route>
//   <Route path='/comment/:id' component={ CommentSection }></Route>
//   <Route path='/songs' component={ App }></Route>
//   </BrowserRouter>
// </div>
