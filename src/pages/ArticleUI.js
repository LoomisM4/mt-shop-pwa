import React, { useEffect, useState } from 'react';
import Cart from '../objects/Cart'

export default function ArticleUI() {
    const [article, setArticle] = useState()

    useEffect(() => {
        let url = localStorage.getItem("articleUrl")
        fetch(url)
            .then(response => response.json())
            .then(response => setArticle(response))
    }, [])

    if (article == null) {
        return <div>Laden...</div>
    } else {
        return (
            <div>
                {article._links.images.map(i => (
                        <div key={i.id}>
                            <img src={i.href} alt={""}/>
                        </div>
                    ))}
                <div>{article.name}</div>
                <div>{article.price}</div>
                <button onClick={addToCart}>In den Warenkorb</button>
            </div>
        )
    }

    function addToCart() {
        Cart.getCart().addArticle(article)
    }
}