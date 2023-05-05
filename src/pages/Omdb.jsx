import React from 'react'
import Menu from '../components/Menu';


const Omdb = () => {
    return (
        <div>
            <Menu />
            <div className="container my-4">
                <h1 className="text-center fw-bold pt-4 pb-3 fs-3"> The Proyect </h1>
                <div className="container fs-6 p-4 fs-5 bg-dark rounded mt-4">
                    <p className="fs-4">This is a straightforward movie search website developed using <span className="fw-bold">React <i class="bi bi-terminal-fill"></i></span>. It leverages the <span className="fw-bold">OMDB REST API*</span> to retrieve movie information and utilizes <span className="fw-bold">Bootstrap <i class="bi bi-bootstrap-fill"></i>
                    </span> for the user interface design. Additionally, the application features icons included from the Bootstrap Icons library. When you click on the button to see more information, the page loads and displays a CSS loader while retrieving the additional data <div class="sk-cube-grid sk-cube-small">
                            <div class="sk-cube sk-cube1"></div>
                            <div class="sk-cube sk-cube2"></div>
                            <div class="sk-cube sk-cube3"></div>
                            <div class="sk-cube sk-cube4"></div>
                            <div class="sk-cube sk-cube5"></div>
                            <div class="sk-cube sk-cube6"></div>
                            <div class="sk-cube sk-cube7"></div>
                            <div class="sk-cube sk-cube8"></div>
                            <div class="sk-cube sk-cube9"></div>
                        </div></p>
                    <p>Users can search for movies by title and get a list of matching results. Each search result displays basic information about the movie such as title, release year  and movie poster. Clicking on a search result shows a detailed movie page with more information.</p>
                    <p>The application is fully responsive and adapts to mobile and desktop devices.</p>
                    <p>In summary, this React-based movie search application is a user-friendly and useful tool for any movie lover who wants to find information about their favorite movies. With its modern design and solid functionality, this application is an excellent option for any web development project in need of an intuitive and well-designed user interface.</p>
                    <p> *The <a href="https://www.omdbapi.com/">OMDb API</a> is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>


                </div>
            </div>
        </div>
    );
}

export default Omdb