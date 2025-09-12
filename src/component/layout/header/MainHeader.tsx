import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Container from '../container'

type Props = { onMobileMenuToggle: () => void, isMobileMenuOpen: boolean }

const MainHeader: React.FC<Props> = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  return (
    <Container>
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={onMobileMenuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6 text-gray-700" /> : <Bars3Icon className="w-6 h-6 text-gray-700" />}
        </button>

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          <a href="/" className="hover:text-primary-dark">MyStore</a>
        </h1>

        {/* Search */}
        <form className="hidden md:flex w-1/2 overflow-hidden border" role="search">
          <label className="sr-only" htmlFor="desktop-search">Search products</label>
          <input type="search" id="desktop-search" placeholder="Search products..." className="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring focus:ring-orange-200 outline-none" />
          <button type="submit" className="bg-primary rounded-r-md px-4 flex items-center justify-center">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="md:hidden" aria-label="Open search">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
          </button>

          <a href="/wishlist" className="relative" aria-label="Wishlist - 3 items">
            <HeartIcon className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </a>

          <a href="/cart" className="flex items-center space-x-2 group" aria-label="Shopping cart - 5 items">
            <div className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700 group-hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">5</span>
            </div>
            <div className="hidden sm:block text-sm">
              <span className="font-semibold">My Cart</span><br />
              <span className="text-gray-500">$120.00</span>
            </div>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default MainHeader;
