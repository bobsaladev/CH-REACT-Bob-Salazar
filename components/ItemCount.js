import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {
    let [contador, setContador] = useState(initial)

    const sumarClick = () =>{
        if (contador < stock ){
            setContador(contador  + 1 )
        }
    }

    const restarClick = () =>{
        if (contador === 0){
            setContador(0)
        }
        else if (contador > 0){
            setContador(contador  - 1)
        }
    }


  return (
    
            <div className='element-contador'>
                <button onClick={sumarClick}>+</button>
                <div className='contador-number'>{contador}</div>
                <button onClick={restarClick}>-</button>
            </div>
  )
}

export default ItemCount