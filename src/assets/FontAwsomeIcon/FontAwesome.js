import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FontAwesome = (props) => {
    const {icons} =props
    return (
        <div>
            <FontAwesomeIcon icon={icons} />
        </div>
    )
}

export default FontAwesome
