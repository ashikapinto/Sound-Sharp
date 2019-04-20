import React, { Component } from "react";
import axios from 'axios';
class ViewForm extends Component{

  constructor(props) {
        super(props);
        this.state ={

            title:"",
            description:"",
            image:"",
            audio:""


        };
  }
  handletitle = e => {
    this.setState({
      title:e.target.value
    })
};
handledesc = e => {
  this.setState({
    description:e.target.value
  })
};

  handleaudio = e => {
    this.setState({
      audio:e.target.files[0]
    })
};
handleimage = e => {
this.setState({
image:e.target.files[0]
})
};
  handleSubmit = () => {
    // // eslint-disable-next-line
    // console.log(item);
    const fd=new FormData();
    fd.append('title', this.state.title);
    fd.append('description', this.state.description);
    fd.append('image',this.state.image);
    fd.append('audio',this.state.audio);
    const { match: { params } } = this.props;
    axios
      .put("http://localhost:8000/api/songs/"+params.id+"/", fd, {headers:{'Content-Type':'multipart/form-data;'}})
      //.then(res => this.refreshList());
      . then ((res) => {
        console.log (res)
    }). catch ((err) => {
        console.log (err)
    })
    this._input.focus();
this._input.value = "";
this._input1.value = "";
      return;
    }
componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.id);

    axios.get('http://localhost:8000/api/songs/'+params.id+'/')
      .then(res => this.setState({ title:res.data.title, description:res.data.description, image: res.data.image, audio:res.data.audio }))

    }

  render(){
    var self = this;
    return(
      <div>
            <h2> Edit Song </h2>
              <form method="post" encType="multipart/form-data">
                <div>
                  <label for="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handletitle}
                    placeholder="Enter Song Title"
                  />
                </div>
                <div>
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handledesc}
                    placeholder="Enter Song description"
                  />
                </div>
                <div>
                  <label for="image">Image</label>
                  <input
                    type="file"
                    name="image"
                    //value={this.state.activeItem.image}
                    onChange={this.handleimage}
                    placeholder="Upload Image"
                    accept='image/*'
                    ref={
                 function(el) {
                   self._input = el;
                 }
               }
                  />
                </div>
                <div>
                  <label for="audio">Audio</label>
                  <input
                    type="file"
                    name="audio"
                    //value={this.state.activeItem.audio}
                    onChange={this.handleaudio}
                    placeholder="Enter Song audio"
                    accept='audio/*'
                    ref={
                 function(el) {
                   self._input1 = el;
                 }
               }
                  />
                </div>

              </form>
              <button color="success" onClick={() => this.handleSubmit()}>
                Save
              </button>
          </div>
    )
  }
}
export default ViewForm;
//    {id}
