import React from 'react';
import './style.css';


const Navbar = (props) => {
  return (
   <div className="nav">
    <nav className="navbar">
        
    <a className="navbar-brand" href="/">Google Books</a>
        

      <a className="nav-item nav-link active" href="/Search">Search</a>
      <a className="nav-item nav-link active" href="/Saved">Save</a>
   
    
 
</nav>
</div>

  );
};

export default Navbar;