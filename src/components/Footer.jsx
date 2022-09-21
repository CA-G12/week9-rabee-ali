import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="logo-in-footer">
            <a href="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDB)"
                width="154"
                height="20"
              />
            </a>
          </div>
          <div className="content-footer">
            <h2>Created by:</h2>
            <h3>
              Rabee A. Al-Bhaisi <span> , </span> Ali Al-Shanti
            </h3>
          </div>
        </div>
      </footer>
    );
  }
}
