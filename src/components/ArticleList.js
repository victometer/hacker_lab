import React from 'react'
import Article from './Article'

const ArticleList = ({allTitles}) => {
    const articleTitles = allTitles.map((article) => {
        return <Article article={article} />
    })

    return (
        <div>
            <h2>Articles</h2>
            <h4>
                {articleTitles}
            </h4>
        </div>
    )
}

export default ArticleList
