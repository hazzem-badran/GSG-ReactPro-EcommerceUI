import './App.css'
import Header from './component/header/Header'
import Container from './component/layout/container'
import Products from './component/Products'
import ShowingWay from './component/ShowingWay'

import SidePar from './component/sidebar/SideBar';
import React from 'react';
import Keywords from './Keywords'



function App() {


  return (
    <main className='w-full h-full bg-gray-200'>
      <Header />
      <Container>
        <div className='w-full h-full gap-4 flex flex-col md:flex-row justify-between items-start'>
          <SidePar />
          <div className='w-full bg-white '>
            <ShowingWay />
            <Products />
          </div>
         

        </div>
          
        
      </Container>
      <section className='w-full bg-gray-300'>
      <Container>


        <Keywords />
      </Container>

        </section>
    </main>
  );
}

export default App;
