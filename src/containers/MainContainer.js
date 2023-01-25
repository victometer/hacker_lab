import React, {useState, useEffect} from 'react'
import ArticleList from '../components/ArticleList'

const MainContainer = () => {
    const [allTitles, setAllTitles] = useState([])
    
    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => data.slice(0, 20))
            // .then(data => console.log(data))s
            .then((ids) =>  {
                const promises = ids.map((id) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json());
                });

                Promise.all(promises)
                .then(data => setAllTitles(data))
            })
            
            
            // ids.map(id => {
            // return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)}))
            // arrayOfPromises => Promise.all(arrayOfPromises)
            // .then(data => setAllTitles(data))

        // Promise.all(titlePromises)
        //     .then (allTitles => setAllTitles(allTitles))
        // console.log (titlePromises)
    }, [])

    // const titlePromises = allTitles.slice(1, 21).map(titleId => {
    //     return fetch(titleId)
    //         .then (res => res.json())
    // })

    // const createArrayOfPromises= (arrayOfIds) => {
    //     arrayOfIds.map(id => {
    //         return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //         .then(res => res.json())})
        // }
        

    

    return (
        <div>
            <h1>Hello!</h1>
            <ArticleList allTitles = {allTitles}/>
        </div>
    )
}

export default MainContainer
