import { render } from '@testing-library/react'
import React from 'react'
import Tick from './state .js'

class Clock extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}