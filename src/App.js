import React, { Component } from 'react';
import {HashRouter, Route, NavLink, Switch, Link} from 'react-router-dom';
import './App.css';
import defaultState from './defaultState.js'
import queryString from 'query-string'

import {Animated} from "react-animated-css";



class App extends Component {
  state = defaultState

  render() {
    return (
        <HashRouter hashType="noslash">
          <div className="App">
          <header className="App-header">
            <h1 className="App-title">Lombard In America</h1>

            <NavLink className="navlink" exact activeClassName="is-active" to="/">Home</NavLink>
            <NavLink className="navlink" exact activeClassName="is-active" to="/about">About</NavLink>
            <NavLink className="navlink" exact activeClassName="is-active" to="/repositories">Repositories</NavLink>
            <NavLink className="navlink" exact activeClassName="is-active" to="/manuscripts">Manuscripts</NavLink>
            <NavLink className="navlink" exact activeClassName="is-active" to="/images">Images</NavLink>

          </header>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/about" component={About}>
            </Route>
            <Route exact path="/repositories" component={Repositories}>
            </Route>
            <Route exact path="/repositories/:id" component={RepoDescription}>
            </Route>
            <Route exact path="/manuscripts" component={Manuscripts}>
            </Route>
            <Route exact path="/manuscripts/:id" component={MsDescription}>
            </Route>
            <Route exact path="/images" component={Images}>
            </Route>
            <Route exact path="/images/:id" component={ImageDescription}>
            </Route>

          </Switch>
          </div>
        </HashRouter>
    );
  }
}


class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <p>A React Site Designed by <a href="http://jeffreycwitt.com">Jeffrey C. Witt</a></p>
        <p>A <a href="http://lombardpress.org">LombardPress</a> Publication</p>
        <p>Data Powered by the <a href="http://scta.info">Scholastic Commentaries and Texts Archive</a></p>
      </div>
    );
  }
}
class Home extends Component {
  render() {
    const displayImageTiles = () => {
      const images = defaultState.images.slice(0, 5).map((image, i) => {
        const coordinates = image.on.split("#")[1].split("=")[1];
        const imagePath = image.default_img_url + "/" + coordinates + "/300,/0/default.jpg";
        return <img src={imagePath}/>
    });
    return images
  }
    return (
      <div>
        <div>
          <h2>Welcome to Lombard in America</h2>
          <p>A site to explore the journey to America of manuscripts containing
            Peter Lombard's Sentences and Sentences Commentaries.</p>
        </div>
        <div className="image-wrapper">
          {displayImageTiles()}
        </div>


      </div>

    );
  }
}
class Repositories extends Component {
  render() {

    const displayRepos = () => {
      const repos = defaultState.repos.map((repo, i) => {
      const path = "/repositories/" + i
        return <Link key={repo.id} to={path}><Repository repo={repo} index={i}/></Link>
      });
      return repos
    }
    return (
      <div className="repo-list">
      {displayRepos()}
      </div>
    );
  }
}
class RepoDescription extends Component {
  render() {
    const index = this.props.match.params.id
    const msPath = "/manuscripts?repo=" + defaultState.repos[index].id
    return (
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <div>
          <p>
            <Link to="/repositories">Back to Repos</Link>
          </p>
          {defaultState.repos[index].title && <p>{defaultState.repos[index].title}</p>}
          <p><Link to={msPath}>View Repo Mss</Link></p>
        </div>

      </Animated>

    );
  }
}
class Repository extends Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={0}>
          <p>{this.props.repo.title}</p>
      </Animated>

    );
  }
}

class Manuscripts extends Component {
  render() {
    const filter = queryString.parse(this.props.location.search).repo;

    const displayMss = () => {
      const mss = defaultState.mss.map((ms, i) => {
        const path = "/manuscripts/" + i
        if (filter){
          if (filter === ms.repo ){
            return <Manuscript key={ms.id} ms={ms} index={i} path={path}/>
          }
        }
        else {
          return <Manuscript key={ms.id} ms={ms} index={i} path={path}/>
        }
      });
      return mss
    }
    const index = defaultState.repos.findIndex(r => r.id === filter);
    const backPath = "/repositories/" + index;

    return (
      <div className="ms-list">
        {filter && <p><Link to={backPath}>Back to Repo Description</Link></p>}
        {displayMss()}
      </div>
    );
  }
}
class MsDescription extends Component {
  render() {

    const displayDescription = () => {
      const index = this.props.match.params.id;
      console.log(index)
      const backPath = "/manuscripts?repo=" + defaultState.mss[index].repo
      if (index){
        return(
          <div>
            <p>
              <Link to={backPath}>Back to Mss. for this Repo</Link>
            </p>
            {defaultState.mss[index].title && <p>{defaultState.mss[index].title}</p>}
            {defaultState.mss[index].description && <p>{defaultState.mss[index].description}</p>}
          </div>
        )
      }
    }
    return (
      <Animated animationIn="bounceInRight" animationOut="bounceOutLeft" isVisible={true}>
        {displayDescription()}
      </Animated>

    );
  }
}
class Manuscript extends Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={true} animationInDelay={0}>
          <p><Link to={this.props.path}>{this.props.ms.title}</Link></p>
      </Animated>

    );
  }
}

class Images extends Component {
  render() {
    const filter = queryString.parse(this.props.location.search).repo;

    const displayImages = () => {
      const images = defaultState.images.map((image, i) => {
        const path = "/images/" + i
        if (filter){
          if (filter === image.ms ){
            return <Image key={image["@id"]} image={image} index={i} path={path}/>
          }
        }
        else {
          return <Image key={image["@id"]} image={image} index={i} path={path}/>
        }
      });
      return images
    }
    return (
      <div className="ms-list">
        {displayImages()}
      </div>
    );
  }
}
class ImageDescription extends Component {
  render() {

    const displayDescription = () => {
      const index = this.props.match.params.id;
      const image = defaultState.images[index]
      const msIndex = defaultState.mss.findIndex(m => m.id === image.ms);
      const backPath = "/manuscripts/" + msIndex;
      const coordinates = image.on.split("#")[1].split("=")[1];
      const imagePath = image.default_img_url + "/" + coordinates + "/500,/0/default.jpg"
      if (index){
        return(
          <div>
            <p>
              <Link to={backPath}>Back to Manuscript</Link> | <Link to="/images">Back to Images</Link>
            </p>
            <p>{image.resource.chars}</p>
            <p><img src={imagePath}/></p>
          </div>
        )
      }
    }
    return (
      <Animated animationIn="bounceInRight" animationOut="bounceOutLeft" isVisible={true}>
        {displayDescription()}
      </Animated>

    );
  }
}
class Image extends Component {
  render() {
    const coordinates = this.props.image.on.split("#")[1].split("=")[1];
    const imagePath = this.props.image.default_img_url + "/" + coordinates + "/50,/0/default.jpg"
    return (
      <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={true} animationInDelay={0}>
          <p><Link to={this.props.path}><img src={imagePath}/></Link> {this.props.image.resource.chars}</p>
      </Animated>

    );
  }
}


export default App;
