import React from 'react'

const ShowMore = () => {
  return (
    <div
      className='flex justify-center items-center cursor-pointer transition-colors
      py-4 text-gray-600 font-medium text-lg my-5 bg-white border border-gray-300
    '>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: 8 }}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 8 12 16" />
        <polyline points="8 12 12 16 16 12" />
      </svg>
      <span>Show More</span>
    </div>
  )
}

export default ShowMore