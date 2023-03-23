import React from "react"
import Article from "./Article"

function ArticleList({ posts }) {
  const arr = posts.map(e => <Article key={e.id} title={e.title} date={e.date} preview={e.preview} minutes={e.minutes} />)
  return (
    <main>
      {arr}
    </main>
  )
}

export default ArticleList