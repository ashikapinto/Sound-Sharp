// import React, { Component } from "react";
// import {
//       button,
//       Form,
//       div,
//       input,
//       label
//     } from "reactstrap";
//     import axios from 'axios';
//         axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//         axios.defaults.xsrfCookieName = "csrftoken";
// class SongsForm extends Component{
//
//   constructor(props) {
//         super(props);
//         this.state = {
//           activeItem: {
//             title: "",
//             description: "",
//             image:"",
//             audio:"",
//           }
//         };
//       }
//         handleChange = e => {
//         let { name, value } = e.target;
//         const activeItem = { ...this.state.activeItem, [name]: value };
//         this.setState({ activeItem });
//       };
//       handleSubmit = item => {
//         // eslint-disable-next-line
//         console.log(item);
//
//         axios
//           .post("http://localhost:8000/api/songs/", {item}, {headers:{'Content-Type':'multipart/form-data;'}})
//           //.then(res => this.refreshList());
//           . then ((res) => {
//             console.log (res.data)
//         }). catch ((err) => {
//             console.log (err)
//         })
//           return;
//         }
//
//   render(){
//     return (
//       <div>
//             <h2> Add Song </h2>
//               <form method="post" encType="multipart/form-data">
//                 <div>
//                   <label for="title">Title</label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={this.state.activeItem.title}
//                     onChange={this.handleChange}
//                     placeholder="Enter Song Title"
//                   />
//                 </div>
//                 <div>
//                   <label for="description">Description</label>
//                   <input
//                     type="text"
//                     name="description"
//                     value={this.state.activeItem.description}
//                     onChange={this.handleChange}
//                     placeholder="Enter Song description"
//                   />
//                 </div>
//                 <div>
//                   <label for="image">Image</label>
//                   <input
//                     type="file"
//                     name="image"
//                     value={this.state.activeItem.image}
//                     onChange={this.handleChange}
//                     placeholder="Upload Image"
//                     accept='image/*'
//                   />
//                 </div>
//                 <div>
//                   <label for="audio">Audio</label>
//                   <input
//                     type="file"
//                     name="audio"
//                     value={this.state.activeItem.audio}
//                     onChange={this.handleChange}
//                     placeholder="Enter Song audio"
//                     accept='audio/*'
//                   />
//                 </FormGroup>
//
//               </form>
//               <button color="success" onClick={() => this.handleSubmit(this.state.activeItem)}>
//                 Save
//               </button>
//           </div>
//         );
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
// export default SongsForm;





import React, { Component } from "react";
import axios from "axios";
import "./SongsForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
class SongsForm extends Component{

  constructor(props) {
        super(props);
        this.state = {

            title: "",
            description: "",
            image:"",
            audio:"",
            message:"",

        };
      }
      handletitle = e => {
        this.setState({
          title:e.target.value
        });
    };
    handledesc = e => {
      this.setState({
        description:e.target.value
      });
  };

      handleaudio = e => {
        this.setState({
          audio:e.target.files[0]
        });
    };
    handleimage = e => {
  this.setState({
    image:e.target.files[0]
  });
  };
      handleSubmit = () => {
        // // eslint-disable-next-line
        // console.log(item);
        const fd=new FormData();
        fd.append('title', this.state.title);
        fd.append('description', this.state.description);
        fd.append('image',this.state.image);
        fd.append('audio',this.state.audio);

        axios
          .post("http://localhost:8000/api/songs/", fd, {headers:{'Content-Type':'multipart/form-data;'}})
          //.then(res => this.refreshList());
          . then ((res) => {
            console.log (res.data);
        }). catch ((err) => {
            console.log (err);

         })
         this._input.focus();
  this._input.value = "";
this._input1.value = "";


        document.getElementById("audio").value = '';
        document.getElementById("image").value = '';
        // document.getElementById("title").value = '';
        // document.getElementById("description").value = '';
          return;
        }

  render(){
     var self = this;
    return (
      <div className="mycontainer">
      <br/>
            <h2 className='heading'> Add Song </h2>
              <form method="post" encType="multipart/form-data">
                <div className="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={this.state.title}
                    onChange={this.handletitle}
                    placeholder="Enter Song Title"
                    ref={
                 function(el) {
                   self._input = el;
                 }
               }
                  />
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="desciption"
                    value={this.state.description}
                    onChange={this.handledesc}
                    placeholder="Enter Song description"
                    ref={
                 function(el) {
                   self._input1 = el;
                 }
               }
                  />
                </div>
                <div className="form-group">
                  <label for="image">Image</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    //value={this.state.image}
                    onChange={this.handleimage}
                    placeholder="Upload Image"
                    accept='image/*'
                  />
                </div>
                <div className="form-group">
                  <label for="audio">Audio</label>
                  <input
                    type="file"
                    name="audio"
                    id = 'audio'
                    //value={this.state.audio}
                    onChange={this.handleaudio}
                    placeholder="Enter Song audio"
                    accept='audio/*'
                  />
                </div>

              </form>
              <div className='mes'>
              </div>
              <button className='saveButton' onClick={() => this.handleSubmit()}>
                Save
              </button>
          </div>
        );
  }
}











export default SongsForm;
