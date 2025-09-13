import Container from "../layout/container"

const DesktopNav = () => {
  return (
      // {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex bg-gray-100 px-5 py-3 border-b border-gray-200 shadow-sm" 
          aria-label="Main navigation"
        >
          <Container>
            <ul className="flex items-center space-l-4  list-none">
              <li>
                <a
                  href="#categories"
                  className="hover:bg-primary hover:text-white transition-colors duration-200 bg-primary text-white text-md font-semibold rounded-l-md p-4 pr-14"
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
                    className="text-md text-gray-700 px-2 py-4 rounded hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                  >
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
  )
}

export default DesktopNav