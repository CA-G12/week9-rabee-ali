import '../styles/category.css'
import React from 'react'
import {Categories} from './Categories'
import {BodyHeader} from './BodyHeader'
export class Body extends React.Component{

    render(){
        const categories = ['popular','top_rated','upcoming']
        return <div className=''>
            <BodyHeader/>
            {categories.map(category => <Categories key={category} category={category}/>)}
        </div>
    }
}

