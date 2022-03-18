import React, {useState,useEffect} from 'react'
import ItemCount from './ItemCount.js'
import ItemList from './ItemList.js'

const ItemListContainer = () => {
  const [loading, setLoading] = React.useState(true)

  console.log(loading)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
       <div className='ilc-wrapper'>
        <div className='ilc-module'>
          <ItemList />
          <div className='contador-wrapper'>
            <div className='element-wrapper'>
              <ItemCount stock={10} initial={0} />
              </div>
              </div>
              <button className='addto-cart' onClick={() => setLoading(loading == false)}>Agregar al Carrito</button>
          </div>
        </div>
  )
}

export default ItemListContainer