import React from 'react';
import Model from './Model/Model';
import Axios from 'axios';
import ReactDOM from "react-dom";

class GalleryImages extends React.Component {
  constructor(props) {
    super(props);
    this.elSearch = React.createRef();
    this.state = {
      listImagesDefault : [],
      linkActive : 0,
    };
  }

  reBuildListImages = (data, callback) => {
    const api = Axios.post('http://localhost:8000/api/images/saveImage',data);
    api.then((response) => {
      this.getImages();
      this.closeOvlAddImages();
    }).catch((error) => {
      callback(error.response.data);
    });
  };

  closeOvlAddImages = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('ovlAddImage'));
  };

  showOvlAddImages = () => {
    let params = ['image_title','image_atl','image_src','image_is_use'];
    ReactDOM.render(
        <React.StrictMode>
          <Model params={params} onSave={this.reBuildListImages} onClose={this.closeOvlAddImages}/>
        </React.StrictMode>,
        document.getElementById('ovlAddImage')
    );
  };

  removeImage = (id) => {
    const api = Axios.delete('http://localhost:8000/api/images/deleteImage?image_id=' + id);
    api.then((response) => {
      this.getImages();
    }).catch((error) => {
      console.log(error.response.data);
    });

  };

  getImages = () => {
    Axios.get('http://localhost:8000/api/images/getImages').then((response) => {
      this.setState({listImagesDefault:response.data.body});
    });
  };

  searchImages = () => {
    Axios.get('http://localhost:8000/api/images/searchImages/' + this.elSearch.value).then((response) => {
      this.setState({listImagesDefault:response.data.body});
    });
    console.log(this.elSearch.value);
  };

  componentDidMount() {
    this.getImages();
  }

  render() {
    let listImagesHtml = "";

        if (this.state.listImagesDefault) {
          listImagesHtml = this.state.listImagesDefault.map((cource,index) => {
            if (cource.image_is_use === '1') {
              return (
                <div key={index} className={'col-lg-3 col-md-4 col-6 visible '}>
                  <div className="h-100 mb-2">
                    <a href={"http://localhost:3000/image/" + cource.id} className="d-block mb-4">
                      <img className="img-fluid img-thumbnail" src={cource.image_src} alt={cource.image_atl} title={cource.image_title}/>
                    </a>
                    <div className="m-2"></div>
                    <button type="button" className="btn btn-danger" onClick={() => this.removeImage(cource.id)}>Remove</button>
                  </div>
                </div>
              )
            } else {
                return "";
            }
          });
        }

    return (
      <div className="container">
        <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
        <div>
          {/* Button trigger modal */}
          <button type="button" className="btn btn-success" onClick={this.showOvlAddImages} data-toggle="modal" data-target="">
            Add Image
          </button>
          <div id={"ovlAddImage"}></div>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="h-100 mb-2">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" ref={(elSearch) => this.elSearch = elSearch} onKeyUp={() => this.searchImages()}/>
        </div>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-left">
          {listImagesHtml}
        </div>
      </div>
    );
  }
}

export default GalleryImages;
