import React from "react";


const NavBar = ({ totalCounters }) => {
  return (

    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />       
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}> 
          {totalCounters}                                                        
        </span>
        Items
      </div>
      <h2 className="mw5 athelas ph3 ph0-l center">Online Shopping</h2>
      <div style ={{display: 'flex', justifyContent:'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      </div>
    </nav>
  );
};

export default NavBar;
