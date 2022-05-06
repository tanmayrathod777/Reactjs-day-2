import { Children } from "react";

export default function Prop(props) {
  
        {
            console.log(props);
            
           return( 
               <div>
                   <h1>The {props.name} aka {props.heroName}  </h1>
                   
               </div>

           )
           }
    
}