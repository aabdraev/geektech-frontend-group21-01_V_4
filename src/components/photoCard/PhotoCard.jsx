import React from 'react'
import { Link } from 'react-router-dom'

const PhotoCard = ({ photosData }) => {
    return (
        <div className='photo__card'>
            <div>
                {photosData.id}: {photosData.title}
            </div>
            <div className='photo__card_btns'>
                <Link to={`/main/${photosData.id}`}>Open photo</Link>
            </div>
        </div>
    )
}

export default PhotoCard