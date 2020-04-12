import React from 'react';
import ReactDOM from 'react-dom';
import GalleryImages from './components/GalleryImages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCources : [
        {
          "name" : "GalleryImages",
          "hash" : "GalleryImages",
          "component" : <GalleryImages/>
        },
        {
          "name" : "Calculator",
          "hash" : "Calculator",
          "component" : <h1>Opp!</h1>
        },
        {
          "name" : "GalleryImages",
          "hash" : "GalleryImages",
          "component" : <h1>Opp!</h1>
        },
        {
          "name" : "GalleryImages",
          "hash" : "GalleryImages",
          "component" : <h1>Opp!</h1>
        }
      ],
      linkActive : 0,
      aaaa : 1111
    };
  }

  handleChangeActive = (index,component) => {
    this.setState({linkActive : index});
    ReactDOM.render(
      component,
      document.getElementById('content')
    );
  }

  render() {
    const listCourcesHtml =
    this.state.listCources.map((cource,index) => {
      let classActive = "";
      if (this.state.linkActive === index) {
        classActive = "active";
      }
      
      return <li key={index} className="nav-item" onClick={this.handleChangeActive.bind(this,index,cource.component)}>
        <a href={"#" + cource.name} className={'nav-link ' + classActive}>{cource.name}</a>
      </li>
    });
    
    return (
      <div className="container">
        <div className="row">
      
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <ul className="nav nav-tabs">
              {listCourcesHtml}
            </ul>
          </div>
      
        </div>
        <div className="row">
      
          <div id={"content"} className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <GalleryImages aaaa={this.state.aaaa}/>
          </div>
      
        </div>
      </div>
    );
  }
}

export default App;
