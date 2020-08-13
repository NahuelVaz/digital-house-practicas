import React from 'react'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'

function PageContent(){
    return (
        <div className="container-fluid">

			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			<FirstRow />

			<SecondRow />
		</div>
    )
}

export default PageContent