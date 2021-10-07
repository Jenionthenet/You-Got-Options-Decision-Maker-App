import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../css/main.css'
import ygoLogo from '../css/images/YGO-logo-small-smile.png'

function Menu(props) {

    return (
        <div>

            <Navbar className="color-nav"  expand="lg">
                <Container fluid>
                    <img id="navLogoImage"
                        src={ygoLogo}
                        height="80"
                        className="d-inline-block align-top"

                    />
                    <Navbar.Brand><h1 id="brandName">You Got Options!</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '210px' }}
                            navbarScroll
                        >
                            <NavLink to="/"><div id="home">Home</div></NavLink>
                            
                            {props.isLoggedIn ? null : <NavLink to="/register"><div id="register">Sign Up</div></NavLink>}
                            {props.isLoggedIn ? null : <NavLink to="/login"><div id="loginMenu">Log In</div></NavLink>}
                            {props.isLoggedIn ? <NavLink to="/decisions"><div id="viewDecisions">My Decisions</div></NavLink> : null}
                            { props.isLoggedIn ? <NavLink to="/add-decision"><div id="addDecisions">Create New Decisions</div></NavLink> : null}
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Menu)