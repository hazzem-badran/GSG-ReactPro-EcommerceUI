import TopBar from './TopBar'
import MainHeader from './MainHeader'
import MobileMenu from './MobileMenu'
import DesktopNav from './DesktopNav'
import { useState } from 'react'



const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='w-full shadow-3xl' role="banner">
      <TopBar />
      <MainHeader onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isMobileMenuOpen={isMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} />
      <DesktopNav />
    </header>
  )
}
export default Header
