import React from "react"
import { render } from "react-dom";

export class Header extends React.Component {
  render() {
    return (
      <nav className="">
        <div className="navbar-header">
          <a href="#">Home</a>
        </div>
      </nav>
    )
  }
}