import React from 'react'
import TopbarButton from './TopbarButton'
import Navbar from './Navbar'
function Topbar(props){
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <TopbarButton />

			<Navbar />

		</nav>
    )
}

export default Topbar