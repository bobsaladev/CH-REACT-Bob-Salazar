import React from 'react'
import ItemCount from './ItemCount.js'

const ItemListContainer = () => {
  return (
       <div className='ilc-wrapper'>
        <div className='ilc-module'>
          <div className='ilc-heading'>Item List Container</div>
          <ItemCount stock={10} initial={0} />
          </div>
        
        </div>
  )
}

export default ItemListContainer