import React,{Component} from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }
}

class Welcome extends Component{
    render() {
        return <h2>not support </h2>
    }
}
export default Welcome ;