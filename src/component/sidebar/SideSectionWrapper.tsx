import React from 'react'

type Props = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
}


const SideSectionWrapper: React.FC<Props> = ({ isOpen, title, children }) => {
  return (
    <details className="group border-b-1 border-gray-300" open={isOpen} >
      <summary className="font-semibold text-gray-800 cursor-pointer py-3 px-1 group-open:bg-gray-100 transition">{title}</summary>
      {children}
    </details>
  )
}

export default SideSectionWrapper