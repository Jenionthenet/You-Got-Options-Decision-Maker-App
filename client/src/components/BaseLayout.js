import { Component } from "react";

// import Footer from './Footer'
import Menu from './Menu'

class BaseLayout extends Component {

    render() {
        return (
            <>
                <Menu /> 
                {this.props.children}
                {/* <Footer/> */}
            </>
        )
    }
}


export default BaseLayout