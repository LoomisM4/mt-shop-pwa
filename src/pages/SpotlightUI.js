import React, { useEffect, useState } from 'react';
import '../style/Spotlight.css'

export default function SpotlightUI() { // 1
    const [articles, setArticles] = useState([]) // 2

    useEffect(() => { // 1
        fetch("https://shop.marcelwettach.eu/spotlight") // 1
            .then(response => response.json()) // 2
            .then(response => setArticles(response._embedded.articles)) // 4
    }, [])

    if (articles.length > 0) { // 3
        return ( // 1
            <div> <!-- 1 -->
                {articles.map(a => ( // 1
                    <div key={a.id} onClick={() => navigateToDetails(a._links.details.href)}> <!-- 8 -->
                        <img src={a._links.spotlightImage.href} alt={""}/> <!-- 6 -->
                    </div>
                ))}
            </div>
        )
    } else { // 1
        return <div>Laden...</div> // 2
    }

    function navigateToDetails(detailsUrl) { // 1
        localStorage.setItem("articleUrl", detailsUrl) // 1
        window.location = "/article" // 2
    }
}

// 38
