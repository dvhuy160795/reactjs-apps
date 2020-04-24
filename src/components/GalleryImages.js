import React from 'react';
import Model from './Model/Model';
import Axios from 'axios';
import ReactDOM from "react-dom";
import App from "../App";

class GalleryImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImagesDefault : [],
      linkActive : 0,
    };
  }

  reBuildListImages = (data) => {
    let image = {
      title : data.title.current.value,
      alt : data.alt.current.value,
      src : data.src.current.value,
      isUse : data.isUse.current.value,
    };
    Axios.post('http://localhost:8000/api/Images/saveImage',image).then((response) => {

    });
    // const api = Axios({
    //   url: 'http://localhost:8000/api/Images/saveImage',
    //   method: 'post',
    //   data: JSON.stringify(image)
    // });
    // api.then((response) => {
    //
    // });
    // this.state.listImagesDefault.push(image);
    // this.setState({listImagesDefault:this.state.listImagesDefault});
  };

  showOvlAddImages = () => {
    let params = ['title','alt','src','isUse'];
    ReactDOM.render(
        <React.StrictMode>
          <Model params={params} onSave={this.reBuildListImages}/>
        </React.StrictMode>,
        document.getElementById('ovlAddImage')
    );
  };

  componentDidMount() {
    Axios.get('http://localhost:8000/api/Images/getImages').then((response) => {
      this.setState({listImagesDefault:response.data.body});
    });
    // Axios.get('http://localhost:3001/get_images',{
    //   params: {
    //     ID: 12345
    //   }
    // }).then((response) => {
    //   this.setState({listImagesDefault:response.data.body});
    // });
  }

  render() {
    let listImagesHtml = "";
        if (this.state.listImagesDefault) {
          listImagesHtml = this.state.listImagesDefault.map((cource,index) => {
            let classActive = "d-none";
            if (cource.isActive) {
              classActive = "";
            }

            return <div key={index} className={'col-lg-3 col-md-4 col-6 visible ' + classActive}>
              <div className="h-100 mb-2">
                <a href={cource.src} className="d-block mb-4">
                  <img className="img-fluid img-thumbnail" src={cource.src} alt={cource.alt} title={cource.title}/>
                </a>
                <div className="m-2"></div>
                <button type="button" className="btn btn-danger" onClick={() => {
                  delete this.state.listImagesDefault[index];
                  let listImagesNew = [];

                  this.state.listImagesDefault.map((image, index) => {
                    if (image) {
                      listImagesNew.push(image);
                    }
                    return "";
                  });
                  this.setState({listImagesDefault:listImagesNew});
                }}>Remove</button>
              </div>
            </div>
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
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-left">
          {listImagesHtml}
        </div>
      </div>
    );
  }
}

export default GalleryImages;

// function GalleryImages(props) {
//   const listImagesDefault = 
//   const [listImages, setListImages] = useState(listImagesDefault);
//   let listImagesHtml = listImages.map((cource,index) => {
//       let classActive = "";
//       if (cource.isActive) {
//         classActive = "active";
//       }
//       return <div key={index} className="col-lg-3 col-md-4 col-6">
//         <div className="h-100 mb-2">
//           <a href={cource.src} className="d-block mb-4">
//             <img className="img-fluid img-thumbnail" src={cource.src} alt={cource.alt} title={cource.title}/>
//           </a>
//           <div className="m-2"></div>
//           <button type="button" className="btn btn-danger" onClick={() => {
//             delete listImages[index];
//             let listImagesNew = [];

//             listImages.map((image, index) => {
//               if (image) {
//                 listImagesNew.push(image);
//               }
//             });
//             setListImages(listImagesNew);
//           }}>Remove</button>
//         </div>
//       </div>
//     });

//   let reBuildListImages = (image) => {
//     listImages.push(image);
//     console.log(listImages);
//     setListImages(listImages);
//   };

//   return (
//    <div className="container">
//     <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
//     <div>
//         {/* Button trigger modal */}
//         <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalLong">
//           Add Image
//         </button>
//         <Model onChangeList={reBuildListImages}/>
//       </div>
//     <hr className="mt-2 mb-5" />
//     <div className="row text-center text-lg-left">
//       {listImagesHtml}
//     </div>
//   </div>
//   );
// }

// export default GalleryImages;
