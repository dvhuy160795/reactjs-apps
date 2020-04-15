import React from 'react';
import Model from './Model/Model';

class GalleryImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImagesDefault : [
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img1.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img2.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img3.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img4.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img5.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img6.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img7.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img8.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img9.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img10.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img11.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img12.jpg",
          "isActive" : true,
        },
        {
          "alt" : "",
          "title" : "",
          "src" : "http://localhost:3000/asset/images/img13.jpg",
          "isActive" : true,
        }
      ],
      linkActive : 0,
      aaaa : 1111
    };
  }

  reBuildListImages = (data) => {
    let image = {
      title : data.title.current.value,
      alt : data.alt.current.value,
      src : data.src.current.value,
      isUse : data.isUse.current.value
    };
    this.state.listImagesDefault.push(image);
    this.setState({listImagesDefault:this.state.listImagesDefault});
  };

  render() {
    let listImagesHtml = this.state.listImagesDefault.map((cource,index) => {
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
            });
            this.setState({listImagesDefault:listImagesNew});
          }}>Remove</button>
        </div>
      </div>
    });
    let params = ['title','alt','src','isUse'];

    return (
      <div className="container">
        <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="">
              Add Image
            </button>
            <Model params={params} onSave={this.reBuildListImages}/>
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
