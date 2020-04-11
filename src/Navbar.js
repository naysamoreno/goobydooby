import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './Navbar.css'

function renderbody(element) {
    ReactDom.render(element, document.getElementById("navBody"))
}
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Navbutton1 value="pro">  </Navbutton1>
                <Navbutton2 value="button2">  </Navbutton2>
                <Navbutton3 value="button">  </Navbutton3>
                <Navbutton4 value="button">  </Navbutton4>
                <Navbutton5 value="button">  </Navbutton5>
            </div>
        )
    }
}

class Navbutton extends React.Component {
    render() {
        return (
        
            <span className="navbutton" onClick={this.handleClick}> {this.props.value} </span>
    
        )
    }
 }
 class Navbutton1 extends Navbutton {
     handleClick() {
            renderbody(
                <div className="navBody page1">hello</div>
            )
     }
 }
 class Navbutton2 extends Navbutton {
    handleClick() {
           renderbody(
               <div className="navBody page2">
                   Welcome Joel
                   <img src={logo}></img>
               </div>
               )
            }
        }
 class Navbutton3 extends Navbutton {
    handleClick() {
        renderbody(
            <div className="navBody page3">hello</div>
            )
        }
    }

class Navbutton4 extends Navbutton {
    handleClick() {
            renderbody(
                <div className="navBody page4">hello</div>
                )
    }
}
class Navbutton5 extends Navbutton {
    handleClick() {
           renderbody(
               <div className="navBody page5">hello</div>
               )
            }
        }
export default Navbar;
