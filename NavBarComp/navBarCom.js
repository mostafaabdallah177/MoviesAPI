import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function NavBarComponent() {
    return ( <
        div >
        <
        Navbar bg = "dark"
        variant = "dark" >
        <
        Container>
        <
        Navbar.Brand href = "#home" > </Navbar.Brand> <
        Nav className = "me-auto" >
        <
        div id = "divNav" >
        <
        Link id = "Nav"
        to = "/"
        className = "mx-3" >
        Home </Link> <
        Link to = "/Favorites"
        id = "Nav"
        className = "mx-3" >
        Favorites </Link> <
        Link to = "/Login"
        id = "Nav"
        className = "mx-3" >
        Login </Link> <
        Link to = "/Rejester"
        id = "Nav"
        className = "mx-3" >
        Rejester 
        </Link> 
        </div> 
        </Nav> 
        </Container> 
        </Navbar> 
       <nav className = "navbar navbar-light bg-light" >
        <
        span id = "spannames"
        className = "container" >
        <
        span id = "spannames" > افلام عربية | </span> <
        span id = "spannames" > افلام امريكية | </span> <
        span id = "spannames" > افلام هندية | </span> <
        span id = "spannames" > افلام رومانسيه | </span> <
        span id = "spannames" > افلام خيال علمي | </span> <
        span id = "spannames" > افلام اكشن | </span> <
        span id = "spannames" > افلام اسيويه | </span> <
        span id = "spannames" > الاحدث | </span> <
        span id = "spannames" > الاكثر شهره | </span> <
        button id = "btnlogout"
        className = "btn-danger" >
        Logout </button> 
        </span>
        </nav> 
        </div>
    );
};