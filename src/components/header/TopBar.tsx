import { BookOpenIcon, ChartBarIcon, CreditCardIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, StarIcon, TagIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import Container from '../layout/container'

const TopBar = () => {
  return (
    // {/* Top Bar - Contact and Quick Links */}
        <div className='bg-black h-8 w-full flex items-center' role="contentinfo">
          <Container>
            <nav className='flex items-center justify-between px-4' aria-label="Secondary navigation">

              {/* Left Side - Contact Info */}
              <div className='flex space-x-4 items-center text-xs'>
                {/* Phone */}
                <a href="tel:+8001234567" className='flex items-center text-white space-x-2'>
                  <PhoneIcon className="w-4 h-4" />
                  <span className='hidden sm:inline'>(+800) 123-4567</span>
                </a>

                {/* Email */}
                <a href="mailto:example@example.com" className='flex items-center text-white space-x-2'>
                  <EnvelopeIcon className="w-4 h-4" />
                  <span className='hidden sm:inline'>example@example.com</span>
                </a>
              </div>

              {/* Right Side - Important Links */}
              <div className='flex items-center text-white text-xs space-x-4'>

                {/* Registration + Payment */}
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <UserPlusIcon className="w-4 h-4" />
                  <span className='hidden sm:inline'>Registration</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                  <CreditCardIcon className="w-4 h-4" />
                  <span className='hidden sm:inline'>Payment</span>
                </a>

                {/* Show from md */}
                <div className='hidden md:flex items-center space-x-4'>
                  <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Location</span>
                  </a>
                  <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                    <TagIcon className="w-4 h-4" />
                    <span>Pricing</span>
                  </a>
                </div>

                {/* Show from lg */}
                <div className='hidden lg:flex items-center space-x-4'>
                  <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                    <BookOpenIcon className="w-4 h-4" />
                    <span>Blog</span>
                  </a>
                  <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                    <ChartBarIcon className="w-4 h-4" />
                    <span>Status</span>
                  </a>
                  <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
                    <StarIcon className="w-4 h-4" />
                    <span>Curated</span>
                  </a>
                </div>
              </div>
            </nav>
          </Container>
        </div>
  )
}

export default TopBar