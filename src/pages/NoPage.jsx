import React from 'react'
import { Menu, Footer } from './../components';
import error from '../assets/error.png'
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <Menu />
      <div className="text-center">
        <img className="img-fluid" src={error} alt="Not Found" /></div>
      <div className="text-center pb-5"><Link class="btn btn-success" to="/" value="Go Back" >Go Home </Link>
      </div>
      <Footer />
    </>
  )
}

export default NoPage