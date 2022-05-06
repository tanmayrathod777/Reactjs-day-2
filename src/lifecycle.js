import { render } from "@testing-library/react";
import React,{Component} from "react";
class Clock extends React.Component{
    constructor(props){
        super(props) ;
        this.date = {date : new Date()}
    }
}

// Component() {
//     console.log('assign to the component');
// }
// componentWillUnmount() {
//     console.log('will unmount ')
// }
// componentWillMount() {
//     console.log('will mount');
// }

// render() {
//     return (
//         <div>
//             <h2>{this.state.date.toLocalTimeString()}</h2>
//         </div>
//     )
// }


class lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Tanmay'
    }
    console.log('lifecycle');
  }
  static getDerivedStateFromProps(props , state) {
      console.log('life cycle a getderived');
  }
  componentDidMount() {
      log('component did mount')
  }
    render() {
        console.log('life cycle render');
    return (
        
      <div>lifecycle</div>
    )
  }
}

export default lifecycle