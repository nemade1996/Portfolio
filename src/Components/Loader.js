import React from 'react'

const Loader = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white-900 bg-opacity-50 z-50">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
    </div>
  )
}

export default Loader