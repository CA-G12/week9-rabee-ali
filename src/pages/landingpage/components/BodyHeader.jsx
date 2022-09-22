import "../styles/bodyHeader.css";
import React from "react";

export class BodyHeader extends React.Component {
  render() {
    return (
      <div className="header-body">
        <div className="content-header">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
      </div>
    );
  }
}
