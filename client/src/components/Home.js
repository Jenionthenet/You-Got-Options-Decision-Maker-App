import { Component } from "react"
import '../css/main.css'
import ygoLogo from '../css/images/YGO-logo-small-smile.png'

class Home extends Component {
    render() {
        return (
            <div id= "homeContainer">
                <div id= "homeSloganContainer">
                <h1 id="appTitle">You Got Options!</h1>
                <h2 id="appSlogan">When you are fortunate enough to have options and just need a little help deciding! </h2>
                </div>
                <img id = "logo" src = {ygoLogo}/>
            </div>
        )
    }
}

export default Home