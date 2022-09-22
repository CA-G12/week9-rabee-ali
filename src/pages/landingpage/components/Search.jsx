import React from 'react'

export class Search extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            query:'',
        }
        this.handleQuery = this.handleQuery.bind(this)
        this.handleSearchRequest = this.handleSearchRequest.bind(this)

    }

    handleSearchRequest(event,cb){
        console.log(cb);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ff772b8d44548a71ed4b78f83ff4c864&query=${this.state.query}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(result => result? cb(result): cb([]))
        .catch(err => console.log('error search request', err))
        event.preventDefault()
    }

    handleQuery(event){
        this.setState({query: event.target.value})
    }
    render(){
        const {findMovie} = this.props
        return <div className='search-container'>
            <div> 
                <input value={this.state.query} type="search" name="movieName" id="searchInput" onChange={this.handleQuery}/>
                <button type='submit' onClick={event => this.handleSearchRequest(event,findMovie)}>Search</button>
            </div>
        </div>
    }
}