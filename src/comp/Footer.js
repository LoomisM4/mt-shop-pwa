import React from "react";
import '../style/Footer.css';

export default function Footer() {
    return(
        <footer>
            <div onClick={() => window.location = "/"}>Spotlight</div>
            <div onClick={() => window.location = "/categories"}>Categories</div>
            <div onClick={() => window.location = "/cart"}>Cart</div>
            <div onClick={() => window.location = "/map"}>Map</div>
        </footer>
    )
}