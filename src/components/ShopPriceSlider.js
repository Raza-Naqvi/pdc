import React from 'react'

const ShopPriceSlider = () => {
    return (
        <div>
            <h2>Price</h2>
            <input type="range" min={0} max={3} value="me" />
        </div>
    )
}

export default ShopPriceSlider
