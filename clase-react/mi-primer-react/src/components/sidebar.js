import React from 'react'
import SidebarDivider from './sidebarDivider'
import SidebarItem from './sidebarItem'
import TiraDeSidebarItems from './tiraDeSidebarItems'

function Sidebar(){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>
            <SidebarDivider className="my-0" />
            <SidebarItem />
            <SidebarDivider />
            <div class="sidebar-heading">Actions</div>
            <TiraDeSidebarItems />
            <SidebarDivider className="d-none d-md-block" />
        </ul>
    )
}

export default Sidebar