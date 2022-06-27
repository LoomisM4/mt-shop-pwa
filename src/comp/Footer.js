import React from "react";
import '../style/Footer.css';

export default function Footer() { // 1
    return( // 1
        <footer> <!-- 1 -->
            <div className={"navLink"} onClick={() => window.location = "/"}> <!-- 4 -->
                <div> <!-- 1 -->
                    <img src="/img/star.png" alt={"star"}/> <!-- 3 -->
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/categories"}> <!-- 4 -->
                <div> <!-- 1 -->
                    <img src="/img/list.png" alt={"list"}/> <!-- 3 -->
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/cart"}> <!-- 4 -->
                <div> <!-- 1 -->
                    <img src="/img/cart.png" alt={"cart"}/> <!-- 3 -->
                </div>
            </div>
            <div className={"navLink"} onClick={() => window.location = "/map"}> <!-- 4 -->
                <div> <!-- 1 -->
                    <img src="/img/map.png" alt={"map"}/> <!-- 3 -->
                </div>
            </div>
        </footer>
    )
}

// 35
