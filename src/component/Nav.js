import { NavLink} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <div>
        
<ul>
  <li><NavLink activeClassName="active"  to="/" exact> Home </NavLink> </li>
  <li><NavLink  activeClassName="active" to="/animals"> Animals</NavLink> </li>
  <li><NavLink  activeClassName="active" to="/about"> About</NavLink> </li>

</ul>
        </div>
    );
};

export default Nav;