import React from 'react'

function TiraDeSidebarItems(){
    return (
        <div>
            <li class="nav-item">
				    <a class="nav-link collapsed" href="/">
					    <i class="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
				    </a>
			    </li>

			    <li class="nav-item">
				    <a class="nav-link" href="/">
					    <i class="fas fa-fw fa-chart-area"></i>
					    <span>Charts</span></a>
			    </li>

			    <li class="nav-item">
				    <a class="nav-link" href="/">
					    <i class="fas fa-fw fa-table"></i>
					    <span>Tables</span></a>
			    </li>
            </div>
    )
}

export default TiraDeSidebarItems