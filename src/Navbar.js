import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import hand from './pictures/hand.jpg';
import './Navbar.css'
import { gsap,TimelineLite } from 'gsap/all'
function Animation() {
    const navBody = document.getElementById("navBody")
    const animation = new TimelineLite({onComplete: () => {
        animation.pause();
        animation.progress(0);
        navBody.style = "";
    }});
    return animation;
}
function renderbody(element) {
    const navBody = document.getElementById("navBody");
    Animation()
    .to(navBody, 0.5, {x: -2000, opacity: 0})
    .to(navBody, 0, {x: 2000, onComplete: () => ReactDom.render(element, navBody)})
    .to(navBody, 0.4, {x: 0, opacity: 1, ease: "elastic.out(.75, 1)"})
    // .to(navBody, 0, {rotationZ: 180, rotationY: 180})
    // .to(navBody, 0.8, {rotationX: 90, onComplete: () => ReactDom.render(element, navBody)})
    // .to(navBody, 0.8, {rotationX: 180})
    .play();
}

const home = <div className="navBody page1"></div>;
const casa = (
    <div className="navBody page2">
                Welcome 2 My Crib
                <img src={hand} width="500px" height="800" alt="hand"></img>
                </div>);
const page3 = <div className="navBody page3">
                <h1 className="text"> 
                I SEE YOU CLICKED HERE
                </h1>
                <iframe className="video" src="https://www.youtube.com/embed/DR6TtBmJ-CE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="albumEmbed" src="https://open.spotify.com/embed/album/46tsdG65ya5HOL8sUf5CS1" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>;
const page4 = <div className="navBody page4">
                Is cute af (:
                </div>;
const page5 = <div className="navBody page5"></div>;



class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Navbutton body={home}> Home </Navbutton>
                <Navbutton body={casa}> press here </Navbutton>
                <Navbutton body={page3}> click here </Navbutton>
                <Navbutton body={page4}> your momma </Navbutton>
                <Navbutton body={page5}> last page </Navbutton>
            </div>
        )
    }

    componentDidMount () {
        renderbody(home)
    }
}

class Navbutton extends React.Component {
    render() {
        return (
        
            <span className="Navbutton" onClick={this.handleClick}> {this.props.children} </span>
    
        )
    }
    
    handleClick = () => {
        renderbody(this.props.body)
    }
 }
export default Navbar;
