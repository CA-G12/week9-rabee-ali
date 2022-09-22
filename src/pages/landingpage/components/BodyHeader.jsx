import "../styles/bodyHeader.css";
import React from "react";
import {Search} from './Search';
export class BodyHeader extends React.Component {
  constructor(props){
    super(props)
    this.props = props
  }
  render() {
    const {findMovie} = this.props
    return (
      <div className="header-body">
        <div className="content-header">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <Search findMovie={findMovie}/>
        </div>
      </div>
    );
  }
}
