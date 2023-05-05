import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="bg-black">
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid ">
                        <Link to="/" class="navbar-brand" href="#"><span className="gradient-text fw-bold  text-center text-sm-start">
                        <i class="bi bi-camera-reels-fill"></i> MovieBox</span></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav text-end">
                                <li class="nav-item ">
                                    <Link className="nav-link" to="/"> Search</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/proyect">Proyect</Link>
                                </li>
                             </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu