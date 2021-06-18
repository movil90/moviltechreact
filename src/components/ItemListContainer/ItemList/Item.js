import React from 'react'

function Item(id, nombre, precio) {
    return (
        <div>
            <h2 key={id}> {nombre} ${precio} </h2>
        </div>
    )
}

export default Item
