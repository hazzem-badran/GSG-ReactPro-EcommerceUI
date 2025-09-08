import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    // <div className="w-full flex items-center justify-center ">
      <div className="w-[85%] h-auto mx-auto">{children}</div>
    // </div>
  )
}

export default Container;
