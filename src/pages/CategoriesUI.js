import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/Categories.css";

export default function CategoriesUI() { // 1
    const [categories, setCategories] = useState([]) // 2
    const [error, setError] = useState("Laden...") // 2

    let params = useParams() // 2

    useEffect(() => { // 1
        let url; // 0
        if (params.categoryId === undefined) { // 3
            url = "https://shop.marcelwettach.eu/categories"; // 1
        } else { // 1
            url = "https://shop.marcelwettach.eu/category/" + params.categoryId; // 3
        }

        fetch(url) // 1
            .then(response => response.json()) // 2
            .then(response => setCategories(response._embedded.categories)) // 2
            .catch(error => setError("Laden fehlgeschlagen. Eventuell besteht keine Internetverbindung")) // 2
    }, [params.categoryId]) // 1

    if (categories.length > 0) { // 3
        return ( // 1
            <div> <!-- 1 -->
                {categories.map(c => { // 1
                    if (c._links.subcategories !== undefined) { // 4
                        return <div className={"menuItem"} key={c.categoryId} onClick={() => navigateToSub(c.categoryId)}> <!-- 8 -->
                            {c.name} <!-- 1 -->
                        </div>
                    } else { // 1
                        return <div className={"menuItem"} key={c.categoryId} onClick={() => navigateToArticleList(c._links.articles.href)}> <!-- 10 -->
                            {c.name} <!-- 1 -->
                        </div>
                    }
                })}
            </div>
        )
    } else { // 1
        return <div>{error}</div> // 2
    }

    function navigateToSub(categoryId) { // 1
        console.log(categoryId)
        window.location = "/categories/" + categoryId // 3
    }

    function navigateToArticleList(detailsUrl) { // 1
        localStorage.setItem("articlesUrl", detailsUrl) // 1
        window.location += "/articles" // 2
    }
}

// 66
