import React from 'react'

function header() {
  return (
    <div>
      <nav className="navbar navbar-expand text-bg-primary">
        <div className="border border-primary border-3 rounded-1">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" className="nav-link disabled">About</a>
            </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default header