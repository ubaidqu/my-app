import React from 'react'
import  PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Navbar(props) {
  const changeblue=()=>{
  
    
    document.body.style.backgroundColor='blue';
  }
  const changedarkblue=()=>{
    document.body.style.backgroundColor='#00008b';
  }
  const changedarkgray=()=>{
    document.body.style.backgroundColor='#a9a9a9';
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button className='btn btn-primary mx-1'onClick={changeblue} >Change blue</button>
      <button className='btn btn-primary mx-1 'onClick={changedarkblue} >Change DarkBlue</button>
      <button className='btn btn-primary mx-2'onClick={changedarkgray} >Change DarkGray</button>
</div>
</div>
      <div className={`form-check form-switch text-${(props.mode==='light'?'dark':'light')}`}>
      <input className="form-check-input" type="checkbox" role="switch" aria-checked id="flexSwitchCheckChecked"onClick={props.togglemode} />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark mode</label>
    </div>
    
  
  
</nav>
      
    
  )
}
Navbar.prototype={ubaid: PropTypes.string,
                 about: PropTypes.string}
