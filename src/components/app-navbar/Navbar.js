/**
 * Component - Navbar
 * MaterializeCSS Navbar component
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 */

/**
 * Import react library
 */
import React, { Component } from "react";
import "./Navbar.css";

/**
 * @class
 * @name Navbar
 * @description MaterializeCSS Navbar component
 * @extends Component
 */
class Navbar extends Component {
   /**
    * Class constructor
    */
   constructor(props) {
      super(props);
      this.state = {
         options: {
            bgColor: "",
            textColor: "White",
            type: "fixed",
            brand: "Logo",
            brandPosition: '',
            extended: false,

         }
      };
   }

   /**
    * Default render method
    */
   render() {
      return (
         <div className="navbar-fixed">
            <nav className="">
               <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">
                     Logo
                  </a>
                  <ul className="right hide-on-med-and-down">
                     <li>
                        <a href="sass.html">Sass</a>
                     </li>
                     <li>
                        <a href="badges.html">Components</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      );
   }
}

export default Navbar;
