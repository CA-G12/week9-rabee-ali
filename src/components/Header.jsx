import './styles.css';
import React from 'react'

export class Header extends React.Component{
    lists = ['Popular','Movies','Anime','Trailers','Collections']  

    render() {
        const {lists} = this
        return (<div>
            <a href="/">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20"/>
            </a>
            {lists.map(list => <button key={list} type="submit">{list}</button>)}
        </div>)
    }
}