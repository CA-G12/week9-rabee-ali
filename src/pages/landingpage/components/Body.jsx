import '../styles/category.css'
import React from 'react'
import {Categories} from './Categories'
import {BodyHeader} from './BodyHeader'
import {Card} from './Categories/Card';
export class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            searchResult: [],
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(result){
        this.setState({searchResult: result})
    }
    render(){
        const categories = ['popular','top_rated','upcoming']
        const {searchResult} = this.state
        return <div className=''>
            <BodyHeader findMovie={this.handleSearch}/>
            {searchResult.length === 0 ? 
                categories.map(category => <Categories key={category} category={category}/>)
                :
                <div>
                <h2 className='cate-title'>Search results</h2>
                <div className='items-List'>
                {searchResult.map(result => <Card key={result.id} posterURl={result.poster_path}
                    title={result.title}
                     release_date={result.release_date} rating={result.vote_average}/>)}
                
            </div>
        </div>
        }
        </div>
    }
}

