import React, { useEffect, useState } from 'react';
import '../style/ArticleList.css'

export default function ArticleList() { // 1
    const [articles, setArticles] = useState([]) // 2

    useEffect(() => { // 1
        let url = localStorage.getItem("articlesUrl") // 2
        fetch(url) // 1
            .then(response => response.json()) // 2
            .then(response => setArticles(response._embedded.articles)) // 4
    }, [])

    if (articles.length > 0) { // 3
        return ( // 1
            <div className={"articleList"}> <!-- 2 -->
                {articles.map(a => ( // 1
                    <div key={a.id} onClick={() => navigateToArticle(a._links.details.href)}> <!-- 8 -->
                        <img src={a._links.preview.href} alt={""}/> <!-- 6 -->
                    </div>
                ))}
            </div>
        )
    } else { // 1
        return <div>Laden...</div> // 2
    }

    function navigateToArticle(detailsUrl) { // 1
        localStorage.setItem("articleUrl", detailsUrl) // 1
        window.location = "/article" // 1
    }
}

// 40
