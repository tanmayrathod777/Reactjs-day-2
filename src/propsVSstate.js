import React, {component} from "react";



class Message extends component {
   constructor() {
       super();
       this.state = {
           Message : 'Thor Is Great !'
       }
   }
    }
    render() {
        return (
            <h1>
                {this.state.Message}
            </h1>
        )
}

export default Message ;