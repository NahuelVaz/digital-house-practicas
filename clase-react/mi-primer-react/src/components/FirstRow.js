import React from 'react'
import FirstRowitem from './FirstRowitem'

function FirstRow (props){
    return (
        <div className="row">

			<FirstRowitem color="primary" text="Products in Data Base" value="135" icon="clipboard-list" />
            <FirstRowitem color="success" text="Amount in products" value="$546.456" icon="dollar-sign" />
            <FirstRowitem color="warning" text="Users quantity" value="38" icon="user-check" />

		</div>
    )
}

export default FirstRow