import { Component } from "react";
import './Trip.css'
// import img from './ladakh.jpg'

class Tripdata extends Component{
    render(){
        return(
            <>
            <div className={this.props.className}>
                <div className="destext">
             
            <h2>{this.props.heading}</h2>
            <p>{this.props.title}</p>
        </div>
        </div>
        
        <div className="img">
            <img src={this.props.img} alt="img"/>

        </div>
        </>
        )
    }
}
export default Tripdata