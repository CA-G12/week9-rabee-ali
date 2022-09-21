import '../../styles/card.css'
import React from 'react'

export class Card extends React.Component {

    constructor({posterURl, title, release_date, rating}){
        super()
        this.posterURl = posterURl
        this.title = title
        this.release_date = release_date
        this.rating = rating
    }

    render(){
        return <div className='item-container'>
            <img className='item-poster' src={`https://image.tmdb.org/t/p/w500/${this.posterURl}`} alt={`${this.title} poster`} />
            <button className='item-title'>{this.title}</button>
            <p className='item-release-date'>{this.release_date}</p>
        </div>
    }
}