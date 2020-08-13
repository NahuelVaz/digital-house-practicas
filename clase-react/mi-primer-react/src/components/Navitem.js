import React from 'react'

function Navitem(props){
    return (
        <li className="nav-item dropdown no-arrow mx-1">
				<a className="nav-link dropdown-toggle" href="/" id={props.id}>
					<i className="fas fa-bell fa-fw"></i>
					<span className="badge badge-danger badge-counter">{props.value}</span>
				</a>
			</li>
    )
}

export default Navitem