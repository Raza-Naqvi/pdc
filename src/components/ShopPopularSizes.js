import React from 'react'
import { Button } from 'react-bootstrap'
import VerticalSlider from "../components/VerticalSlider"
const ShopPopularSizes = () => {
    return (
        <>
        <div >
            <Button className='m-2 btn btn-light'>Large</Button>
            <Button className='m-2 btn btn-light'>Mediun</Button>
            <Button className='m-2 btn btn-light'> Small</Button>
            <Button className='m-2 btn btn-light'>xSmall</Button>
            </div>
            <VerticalSlider />
        </>
    )
}

export default ShopPopularSizes
