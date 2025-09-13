import React from 'react'

type Props = {
  isOpen: boolean,
}

const MobileMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    //  {/* Mobile Menu */}
    <div
      className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <form role="search" className="px-4 py-2">
        <label className="sr-only" htmlFor="mobile-search">Search products</label>
        <input
          type="search"
          id="mobile-search"
          name="mobile-search"
          placeholder="Search products..."
          className="w-full rounded-md border border-gray-300 text-gray-900 px-4 py-2 focus:border-primary focus:ring focus:ring-orange-200 outline-none transition"
        />
      </form>
      <nav className="py-2" aria-label="Mobile categories">
        <ul className="list-none">
          <li>
            <a
              href="#categories"
              className="block px-4 py-2 text-primary font-semibold hover:bg-gray-50"
              aria-current="page"
            >
              All Categories
            </a>
          </li>
          {[
            "Apple",
            "Samsung",
            "Huawei",
            "Xiaomi",
            "Oppo",
            "Realme",
            "OnePlus",
            "Sony",
            "Nokia",
          ].map((brand) => (
            <li key={brand}>
              <a
                href={`/brand/${brand.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {brand}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu