import React from 'react'

const ArticleList = ({allTitles}) => {
    return (
        <div>
            <h2>Articles</h2>
            <p>{allTitles.title}</p>
        </div>
    )
}

export default ArticleList
