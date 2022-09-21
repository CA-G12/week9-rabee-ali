import '../../styles/category.css';
import React from 'react'
import { Card } from './Card'

export class Categories extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    state = {
        data: null
    }

    componentDidMount(){
        const {category} = this.props

        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=ff772b8d44548a71ed4b78f83ff4c864`)
        .then(response => response.json())
        .then(json => this.setState({ data: json}))
        .catch(err => console.error('Categories fetch ', err))
    }

   
    render(){
        const {category} = this.props
        const {data} = this.state 
        return data? 
        <div>
            <h2 className='cate-title'>{category.replace(/_/,' ')}</h2>
            <div className='items-List'>
                {data.results.map(movie =>
                    <Card key={movie.id} posterURl={movie.poster_path}
                     title={movie.title}
                      release_date={movie.release_date} rating={movie.vote_average}/>)}
                
            </div>
        </div> :
        <div>
            Loading....
        </div>
    }

}