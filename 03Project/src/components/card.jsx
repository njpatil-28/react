import React from 'react'
function Card({Number, year=2025, imageType, imageURL}) {
    return(
    <div className="flex flex-col items-center gap-1 p-7 rounded-2xl">
        <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src={imageURL}/>
        </div>
        <div className="flex items-center">
            <span className="text-2xl font-medium">Class Warfare </span>
            <span className="font-medium text-sky-500">{imageType}</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span> No. </span>
            <span>{Number}</span>
            <span>{year}</span>
            </span>
        </div>
    </div>
    )
}
export default Card