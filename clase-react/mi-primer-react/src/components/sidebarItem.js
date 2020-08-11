import React from 'react'

function SidebarItem(){
    let item = "Dashboard"
    return (
        <li class="nav-item active">
				<a class="nav-link" href="/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
				    <span>{item}</span>
                </a>
			</li>
    )
}

export default SidebarItem