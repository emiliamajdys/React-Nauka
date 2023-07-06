import React, {useState} from 'react'
import { ChButton, ChValue, CheckoutContainer } from './StyledElements';

const Basket = () =>{
    const [count, setCount] = useState (0);
    const handleClickAdd = () => {
        setCount(count +1)
    }
    const handleClickSub = () => {
        setCount( count -1)
    }
    const handleClickRes = () => {
        setCount(0)
    }

   return(
    <CheckoutContainer>
        <ChButton onClick={handleClickAdd}>+</ChButton>
        <ChValue>Stan: {count} </ChValue>
        <ChButton onClick={handleClickSub}>-</ChButton>
        <ChButton onClick={handleClickRes}>Reset</ChButton>
    </CheckoutContainer>

  )

}
export default Basket;