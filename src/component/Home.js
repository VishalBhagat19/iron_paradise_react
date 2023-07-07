import React from 'react'
import style from '../css/style.css'
function Home() {
  return (
    <>
    <div>
      <div className="carousel slide" data-bs-ride="carousel" id="a">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#a" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#a" data-bs-slide-to="1" ></button>
          <button type="button" data-bs-target="#a" data-bs-slide-to="2" ></button>
          <button type="button" data-bs-target="#a" data-bs-slide-to="3" ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">

            <img src="img/slider/slider-4.jpg" className="w-100" alt="..." />
            <div className="carousel-caption">
              <b>First slide label</b>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">

            <img src="img/slider/slider-2.jpg" className="w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="4000">

            <img src="img/slider/slider-1.jpg" className="w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">

            <img src="img/slider/slider-3.jpg" className="w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>

        </button>
      </div>


      <section className="best-deals">
        <div className="py-5 bg-light-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <h1 className="text-black">We can give you</h1>
                  <h2 className="text-warning">Much More Than Others</h2>

                </div>
              </div>
            </div>

            <div className="row justify-content-between align-items-center text-center">
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/gyms.png"
                  className="img-fluid" />
                <p>156 Gyms</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/cities.png" className="img-fluid text-center" />
                <p>95 Cities</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/states.png" className="img-fluid text-center" />
                <p>26 States</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/Website_Personal.png" className="img-fluid" />
                <p>Personal Traning Program</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/Corporate.png" className="img-fluid" />
                <p>Coprate wellness program</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="https://goldsgym.in/uploads/home_icons/Group_Exercise.png" className="img-fluid" />
                <p>Group program</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container-fluid why1">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 ">
              <h1>IRON PARADISE GYM</h1>
              <p className='text-white'>Paradise Trainers is a boutique personal fitness service specializing in private one-on-one whole-body functional training tailored to each client’s needs. Launched in 2016 by certified personal trainer Maryelizabeth Carter, the operation serves clients in person at their private facility in Rutherford, New Jersey, and offers sessions remotely to clients around the world. All staff are experts in exercise science with additional certifications from NASM, ACE, ISSA, and more. Each trainer has worked with a wide range of clients of all ages and athletic abilities. Underground Trainers provides clients with a healthy and positive personal training experience with a focus on their overall well-being. <br/><br/>
          Reach out to learn more and start your health journey with a free fitness assessment.
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid courses">
        <h1>Courses</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-7 a">
              <h5>Paradise Advanced Personal Training Course</h5>
              <p>As an aspiring Fitness Trainer, to get an entry in the fitness industry it is recommended to have a professional certification. Gold’s Gym Fitness Institute offers ACE accredited, globally recognized, certification that comprises of comprehensive training and the syllabus where you can learn all the relevant concepts related to the fitness Now you would have decided to become a gym trainer but there are so many courses available in the market it is difficult for anyone to choose the right one.</p>
            </div>
            <div className="col-md-5 text-center courses_img">
              <img src="img/course1.jpeg" />
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-md-5 text-center courses_img">
              <img src="img/course2.jpeg" />
            </div>
            <div className="col-md-7 a">
              <h5>Paradise Short Course - Female Fitness</h5>
              <p>Understanding female anatomy and physiology and being able to design a program for women with special conditions will definitely help you excel in your career as a 360 degree skilled trainer. As more and more females are opting for physical transformation, it’s the need of an hour to find better trainers who specialize in Female Fitness.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid why2">
        <h1>Exercise</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="img/gallery/1.webp" className="img-fluid" alt="1" />
              <br />

            </div>
            <div className="col-md-3">
              <img src="img/gallery/2.webp" className="img-fluid" alt="2" />
            
            </div>
            <div className="col-md-3">
              <img src="img/gallery/3.jpeg" className="img-fluid" alt="3" />
            
            </div>
            <div className="col-md-3">
              <img src="img/gallery/7.webp" className="img-fluid" alt="4" />

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid why2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img src="img/gallery/5.jpg" className="img-fluid" alt="1" />
             
            </div>
            <div className="col-md-3">
              <img src="img/gallery/3.webp" className="img-fluid" alt="2" />
       
            </div>
            <div className="col-md-3">
              <img src="img/gallery/7.jpg" className="img-fluid" alt="1" />
            
            </div>
            <div className="col-md-3">
              <img src="img/gallery/8.jpg" className="img-fluid" alt="1" />

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid why2">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="img/gallery/9.jpg" className="img-fluid" alt="1" />
        
            </div>
            <div className="col-md-3">
              <img src="img/gallery/10.jpg" className="img-fluid" alt="1" />
 
            </div>
            <div className="col-md-3">
              <img src="img/gallery/12.jpg" className="img-fluid" alt="1" />
         
            </div>
            <div className="col-md-3">
              <img src="img/gallery/11.jpg" className="img-fluid" alt="1" />
             
            </div>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Home