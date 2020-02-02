// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
// a. An h1 with your name
// b. A paragraph with a little blurb about yourself
// c. An ordered or unordered list of the top 3 vacation spots you'd
//    like to visit
//3. Render an instance of that functional component to the browser

import React from "react"
import ReactDom from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Lilit Khamalyan</h1>
      <p>Learning React JS.</p>
      <ul>
        <li>France</li>
        <li>Canada</li>
        <li>London</li>
      </ul>
    </div>
  )
}
ReactDom.render(
  <MyInfo />,
  document.getElementById("root")
)
