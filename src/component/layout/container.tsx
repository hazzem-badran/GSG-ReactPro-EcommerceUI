import React from 'react'

type Props = {
  children: React.ReactNode,
  classNamee?: string
}

const Container: React.FC<Props> = ({children, classNamee}) => {
  return (
      <div className={`w-full max-w-7xl px-4 mx-auto ${classNamee}`}>{children}</div>
      // <div className={`w-[85%] h-auto mx-auto ${classNamee}`}>{children}</div>

  )
}

export default Container;
