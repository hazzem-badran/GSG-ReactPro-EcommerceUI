import { useView } from '@/context/ViewContext'
import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/solid'

const ShowingWay = () => {
  const {view, toggleView} = useView()

  return (
    <div className='flex justify-between items-center mb-6'>
      <span className='flex items-center space-x-2'>
        <button
          onClick={toggleView}
          className={`p-1 rounded ${view === 'grid' ? 'bg-primary' : ''}`}
          aria-label="Grid view"
        >
          <Squares2X2Icon className="w-6 h-6 text-gray-400" />
        </button>
        <button
          onClick={toggleView}
          className={`p-1 rounded ${view === 'list' ? 'bg-primary' : ''}`}
          aria-label="List view"
        >
          <Bars3Icon className="w-6 h-6 text-gray-400" />
        </button>
        <p className='pl-6 text-gray-800 text-base'>Showing 16 / 125 results</p>
      </span>
    </div>
  )
}

export default ShowingWay