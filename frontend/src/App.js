// import React, { Component } from 'react';
// import SongsForm from "./components/SongsForm";
// import CommentSection from "./components/CommentSection";
// // eslint-disable-next-line
// import { BrowserRouter, Route , Link} from "react-router-dom";
// import axios from "axios";
// import ViewForm from "./components/ViewForm";
//
// class App extends Component {
//
//   constructor(props) {
//         super(props);
//         this.state ={
//           songList: []
//         };
//   }
//
//   componentDidMount() {
//         this.refreshList();
//       }
//   refreshList = () => {
//         axios
//           .get("http://localhost:8000/api/songs/")
//           .then(res => this.setState({ songList: res.data }))
//           .catch(err => console.log(err));
//       };
//       handleDelete = id => {
//         console.log(id);
//
//         axios
//           .delete('http://localhost:8000/api/songs/'+id)
//           .then(res => this.refreshList());
//
//       };
//        // eslint-disable-next-line
//       renderItems = () => {
//         var Style = {
//     padding: 10,
//           margin: 10,
//           borderStyle: "groove",
//     width: 400,
//     backgroundColor: "#FFFFFF",
//     display: "inline-block",
//       };
//         return this.state.songList.map(item => (
//           <div key={ item.id } style={Style}>
//             <span>{ item.id }</span>
//             <div>{ item.description }</div>
//             <img width='200px' height='200px' src={ item.image } alt={ item.title }></img>
//             <div><audio ref='audio_tag' src={ item.audio } controls></audio></div>
//             <div>
//
//               <button onClick={() => this.handleDelete(item.id)}>Delete</button>
//               <Link to={'/edit/'+item.id} >Edit </Link>
//               <Link to={'/comment/'+item.id}> Comments</Link>
//
//             </div>
//           </div>
//         ));
//       }
//   render() {
//     var l={
//       float:'right'
//     }
//     return (
//
//       //<Link to =
//       <div>
//       <ul >
//    <div >
//      <a href="#">Website NAME</a>
//    </div>
//
//      <li style={l}><a href="http://localhost:3000/songs">Home</a></li>
//      <li  style={l}><a href="http://localhost:3000/addSong">Addnew</a></li>
//    </ul>
//         <BrowserRouter>
//         <Route path='/edit/:id' component={ ViewForm }></Route>
//         <Route path='/addSong' component={ SongsForm }></Route>
//         <Route path='/comment/:id' component={ CommentSection }></Route>
//         { this.renderItems() }
//         </BrowserRouter>
//       </div>
//
//     );
//   }
//
// }
// export default App;





import React, { Component } from 'react';
import SongsForm from "./components/SongsForm";
import CommentSection from "./components/CommentSection";
// eslint-disable-next-line
import { BrowserRouter, Route , Link} from "react-router-dom";
import axios from "axios";
import ViewForm from "./components/ViewForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddComment from './components/AddComment';
class App extends Component {

  constructor(props) {
        super(props);
        this.state ={
          songList: []
        };
  }

  componentDidMount() {
        this.refreshList();
      }
  refreshList = () => {
        axios
          .get("http://localhost:8000/api/songs/")
          .then(res => this.setState({ songList: res.data }))
          .catch(err => console.log(err));
      };
      handleDelete = id => {
        console.log(id);

        axios
          .delete('http://localhost:8000/api/songs/'+id)
          .then(res => this.refreshList());

      };
       // eslint-disable-next-line
      renderItems = () => {
        var Style = {
    padding: 20,
     borderRadius: 25,
          margin: 10,
          borderStyle: "groove",
    width: 400,
    backgroundColor: "white",
    display: "inline-block",
      };
      var tit={
        color: "maroon",

      }
      var im={
        borderRadius:5,
        backgroundColor: '#343a40',
        color: 'white',
      }
      var audioStyle = {
        width: '75%',
        height: 20,
        borderRadius: 0,
      }
      var c = {
        position:'right!important',
      }
        return this.state.songList.map(item => (
          <div>
          <br/>
          <div key={ item.id } style={Style}>
            <h1 style={tit}>{ item.title }</h1>

            <span style={ c }>Published on: { item.created_date }</span><hr/>
            <div>{ item.description }</div>
            <br/>
            <img width='50%' height='150px' src={ item.image } style={im} alt={ item.title }></img>
          <p></p>
            <div><audio style={ audioStyle } ref='audio_tag' src={ item.audio } controls></audio></div>
            <div>

              <button style={im}  onClick={() => this.handleDelete(item.id)}>Delete</button><p></p>
              <Link to={'/edit/'+item.id} ><button style={im}>Edit</button> </Link><p></p><Link to={'/comment/'+item.id}> <button style={im}>Comments</button></Link>
              <Link to={'/addcomment/'+item.id}><button style={ im }>Add Comments</button></Link>
            </div>
          </div>
          </div>
        ));
      }
  render() {
    var l={
      float:'right'
    }
    return (

      //<Link to =
      <div>
        { this.renderItems() }
      </div>

    );
  }

}
export default App;
