import React from "react"

function About({ about, image="http://via.placeholder.com/215" }) {
  return (
    <aside>
      <img alt="blue logo" src={image} />
      <p>{about}</p>
    </aside>
  )
}

export default About