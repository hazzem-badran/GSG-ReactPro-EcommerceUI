import './App.css'
import Header from './component/header/Header'
import Container from './component/layout/container'
import Products from './component/Products'
import ShowingWay from './component/ShowingWay'

function App() {
  return (
    <main className='w-full h-full bg-gray-400'>
      <Header />
      <Container>


        <div className='w-full h-full gap-4 flex justify-between items-center'>
          <div className='w-1/3  bg-amber-800 '>
            side bar
            side bar

          </div>
          <div className='w-full bg-gray-200 '>
            <ShowingWay />
            <Products  />

          </div>
        </div>
      </Container>



    </main>
  )
}

export default App
