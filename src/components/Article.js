import React from "react"

function Article({
title, 
date="January 1, 1970",
preview,
minutes}) {

  function readTime() {
    if (minutes < 30) {
      let coffee = "☕️";
      return coffee;
    } else {
      let bento = "🍱"
      return bento;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <div>
        <small>{date}</small> || 
        <small> {readTime()}{minutes} min read</small>
      </div>
      <p>{preview}</p>
    </article>
  )
}

export default Article