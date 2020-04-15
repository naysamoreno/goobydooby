import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './Navbar.css'

function renderbody(element) {
    ReactDom.render(element, document.getElementById("navBody"))
}

const home = <div className="navBody page1">hello</div>;
const casa = (
    <div className="navBody page2">
                Welcome Joel
                <img src={logo}></img>
                </div>);
const page3 = <div className="navBody page3">hello</div>;
const page4 = <div className="navBody page4">hello</div>;
const page5 = <div className="navBody page5">hello</div>;



class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Navbutton body={home}> pro </Navbutton>
                <Navbutton body={casa}> button </Navbutton>
                <Navbutton body={page3}> button </Navbutton>
                <Navbutton body={page4}> button </Navbutton>
                <Navbutton body={page5}> button </Navbutton>
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
        
            <span className="navbutton" onClick={this.handleClick}> {this.props.children} </span>
    
        )
    }
    
    handleClick = () => {
        renderbody(this.props.body)
    }
 }
export default Navbar;
