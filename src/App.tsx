import './App.css'
import Header from './component/header/Header'
import Container from './component/layout/container'
import Products from './component/Products'
import ShowingWay from './component/ShowingWay'
import SidePar from './component/sidebar/SideBar';
import React from 'react';
import Keywords from './Keywords'
import Footer from './component/footer/Footer'
import TitleSection from './component/TitleSection'
import Breadcrumb from './component/Breadcrumb'
import ShowMore from './component/ShowMore'
import Pagination from './component/Pagination'

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
