import React from 'react';
import ReactDOM from 'react-dom';
import GalleryImages from './components/GalleryImages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // ref: https://reacttraining.com/react-router/web/guides/quick-start

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCources : [
        {
          "name" : "GalleryImages",
          "hash" : "",
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
    };
  }

  handleChangeActive = (index,component) => {
    this.setState({linkActive : index});
  };

  render() {
    const listCourcesHtml =
    this.state.listCources.map((cource,index) => {
      let classActive = "";
      if (this.state.linkActive === index) {
        classActive = "active";
      }
      
      return <li key={index} className="nav-item" onClick={this.handleChangeActive.bind(this,index,cource.component)} >
        <Link to={"/"+ cource.hash} className={'nav-link ' + classActive}>{cource.name}</Link>
      </li>
    });
    
    return (
        <Router>
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
                <Switch>
                  <Route path="/about">
                    {""}
                    {/*<About />*/}
                  </Route>
                  <Route path="/Calculator">
                    {""}
                    {/*<Users />*/}
                  </Route>
                  <Route path="/">
                    <GalleryImages/>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
