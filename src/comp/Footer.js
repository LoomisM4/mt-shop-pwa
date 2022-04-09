import React from "react";
import '../style/Footer.css';

export default function Footer() {
    return(
        <footer>
            <div className={"navLink"} onClick={() => window.location = "/"}>
                <div>
                    <img src="img/star.png"/>
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/categories"}>
                <div>
                    <img src="img/list.png"/>
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/cart"}>
                <div>
                    <img src="img/cart.png"/>
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/map"}>
                <div>
                    <img src="img/map.png"/>
                </div>
            </div>
        </footer>
    )
}
