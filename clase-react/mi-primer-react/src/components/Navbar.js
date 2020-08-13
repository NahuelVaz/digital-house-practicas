import React from 'react'
import Navitem from './Navitem'

function Navbar(props){
    return (
        <ul className="navbar-nav ml-auto">

			<Navitem id="alertsDropdown" value="3+" />
            <Navitem id="messagesDropdown" value="7" />
			
            <div className="topbar-divider d-none d-sm-block"></div>

			<li className="nav-item dropdown no-arrow">
				<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
					<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
					<img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" />
				</a>
			</li>

		</ul>
    )
}

export default Navbar