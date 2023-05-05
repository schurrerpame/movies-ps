import React from 'react'
import { Menu, MovieList, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="w-100">
    <Menu />
    <MovieList />
    <Footer />
      
    </div>
  )
}

export default App

