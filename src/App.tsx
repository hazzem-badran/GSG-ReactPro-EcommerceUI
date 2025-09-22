import './App.css'
import Header from './components/header/Header'
import Container from './components/layout/container'
import Products from './components/product/Products'
import ShowingWay from './components/common/ShowingWay'
import SidePar from './components/sidebar/SideBar';
import React from 'react';
import Keywords from './Keywords'
import Footer from './components/layout/Footer'
import TitleSection from './components/common/TitleSection'
import Breadcrumb from './components/common/Breadcrumb'
import ShowMore from './components/common/ShowMore'
import Pagination from './components/common/Pagination'

function App() {


  return (
    <main className='w-full h-full bg-[#e5e5e5]'>
      <Header />

      <Container>
        <Breadcrumb />
        <TitleSection />
        <div className='w-full h-full gap-4 flex flex-col md:flex-row justify-between items-start'>
          <SidePar />
          <div className='w-full '>
            <ShowingWay />
            <Products />
            <ShowMore />
            <Pagination totalPages={5} onPageChange={(page) => console.log("Page changed to:", page)} />
          </div>


        </div>


      </Container>
      <section className='w-full border-t border-gray-300 mt-0'>
        <Container>
          <Keywords />
        </Container>
      </section>


      <Footer />
    </main>
  );
}

export default App;
