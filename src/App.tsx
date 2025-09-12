import './App.css'
import {
  PhoneIcon, EnvelopeIcon, MapPinIcon, ChartBarIcon, BookOpenIcon, StarIcon, CreditCardIcon, TagIcon, UserPlusIcon,
  HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon
} from '@heroicons/react/24/solid'
import Container from './component/layout/container'

function App() {
  return (
    <div className='w-full bg-white'>


      {/* القسم الأول */}
      <header className='w-full shadow-3xl'>

        <div className='bg-black h-8 w-full '>
          <Container>
            <div className='flex items-center justify-between px-4'>

              <div className='flex space-x-6 items-center text-xs'>
                <span className='flex items-center text-white space-x-2'>
                  <PhoneIcon className="w-4 h-4" />
                  <span className='text-white'>(+800) 123-4567</span>
                </span>

                <span className='flex items-center text-white space-x-2'>
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>example@example.com</span>
                </span>
              </div>

              <div className='flex items-center space-x-6 text-white text-xs'>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Location</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <ChartBarIcon className="w-4 h-4" />
                  <span>Status</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <BookOpenIcon className="w-4 h-4" />
                  <span>Blog</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <StarIcon className="w-4 h-4" />
                  <span>Curated</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <CreditCardIcon className="w-4 h-4" />
                  <span>Payment</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <TagIcon className="w-4 h-4" />
                  <span>Pricing</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <UserPlusIcon className="w-4 h-4" />
                  <span>Registration</span>
                </a>
              </div>
            </div>

          </Container>
        </div>
        <Container>

          {/* القسم الثاني */}
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-primary">MyStore</div>

            {/* Search */}
            <div className="flex w-1/2 overflow-hidden border">
              <input
                type="text"
                placeholder="Search products..."
                className=" w-full rounded-l-md border border-gray-300 text-gray-900 px-4 py-2 focus:border-primary focus:ring focus:ring-orange-200 outline-none transition"
              />
              <button className="bg-primary rounded-r-md px-4 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </button>
            </div>


            {/* Icons */}
            <div className="flex items-center space-x-6">
              {/* Likes */}
              <div className="relative">
                <HeartIcon className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </div>

              {/* Cart */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">5</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">My Cart</span><br />
                  <span className="text-gray-500">$120.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* القسم الثالث */}
          <nav className="bg-primary text-white px-6 py-2 flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:underline">All Categories</a>
            <a href="#">Apple</a>
            <a href="#">Samsung</a>
            <a href="#">Huawei</a>
            <a href="#">Xiaomi</a>
            <a href="#">Oppo</a>
            <a href="#">Realme</a>
            <a href="#">OnePlus</a>
            <a href="#">Sony</a>
            <a href="#">Nokia</a>
          </nav>
        </Container>

      </header>
    </div>
  )
}

export default App
