import React from "react";
import Screen1 from "../assets/header.png";
import aboutimage from "../assets/about.png";
import aboutimage1 from "../assets/dot-bg.png";
import icon1 from "../assets/ri--open-arm-line.png";
import class1 from "../assets/class-1.jpg";
import class2 from "../assets/class-2.jpg";
import class3 from "../assets/class-3.jpg";
import class4 from "../assets/class-4.jpg";
import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";
import basicplan from "../assets/price-1.png";
import weeklyplan from "../assets/price-2.png";
import monthlyplan from "../assets/price-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import CardSwiper from "../Component/CardSwiper";

function Home() {
  return (
    <>
      <div className="main">
        <section className="firstsection">
          <div className="content">
            <div className="mt-32 ml-24 mr-24">
              <h1 className="text-[2.5rem] font-normal text-[color:var(--text-dark)]">
                Build Your Body &
              </h1>
              <br></br>
              <h1 className="text-[3.5rem] font-bold">Shape Yourself!</h1>
              <br></br>
              <p className="text-slate-500 mb-8">
                Unleash your potential and embark on a journey towards a
                stronger,
                <br></br>
                fitter, and more confident you. Sign up for 'Make Your Body
                Shape' now <br></br>and witness the incredible transformation
                your body is capable of!
              </p>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Join Today
              </button>
            </div>
          </div>
          <div className="image1">
            <img src={Screen1} alt="screen1" />
          </div>
        </section>

        {/* second sections */}

        <section className="firstsection">
          <div className="max-w-[500px] m-auto">
            <img src={aboutimage1} alt="aboutimage1" className="aboutimage1" />
            <img src={aboutimage} alt="aboutimage" className="aboutimage" />
          </div>
          <div className="content">
            <div className="mt-32 ml-36">
              <h1 className="relative text-4xl font-semibold text-[color:var(--text-dark)] mb-4 pb-2;">
                Our Story
              </h1>
              <br></br>
              <p className=" max-w-[900px] text-slate-500">
                Led by our team of expert and motivational instructors, "The
                Class You <br></br> Will Get Here" is a high-energy,
                results-driven session that combines a <br></br>perfect blend of
                cardio, strength training, and functional exercises.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <div className="max-w-[30px] border-2 rounded-[50%]">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="ml-4">
                  <h6 className="text-[1.2rem] font-medium text-[color:var(--text-dark)] mb-2">
                    Open Door Policy
                  </h6>
                  <p className="max-w-[900px] text-slate-500">
                    We believe in providing unrestricted access to all <br></br>
                    individuals, regardless of their fitness level, age, or
                    <br></br>
                    background.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <div className="max-w-[30px] border-2 rounded-[50%]">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="ml-4">
                  <h6 className="text-[1.2rem] font-medium text-[color:var(--text-dark)] mb-2">
                    Fully Insured
                  </h6>
                  <p className="max-w-[900px] text-slate-500">
                    Your peace of mind is our top priority, and our commitment{" "}
                    <br></br>
                    to your safety extends to every aspect of your fitness
                    <br></br>
                    journey.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <div className="max-w-[30px] border-2 rounded-[50%]">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="ml-4">
                  <h6 className="text-[1.2rem] font-medium text-[color:var(--text-dark)] mb-2">
                    Persional Trainer
                  </h6>
                  <p className="max-w-[900px] text-slate-500">
                    With personalized workout plans tailored to your needs, we
                    <br></br>
                    will ensure that you get the most out of your gym<br></br>
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* third section */}

        <section>
          <div className="ml-24 mt-96 mr-24">
            <div className="mt-10">
              <h6 className="text-4xl font-semibold text-[color:var(--text-dark)] mb-4">
                Our Classes
              </h6>
              <p className="max-w-[900px] text-slate-500">
                Discover a diverse range of exhilarating classes at our gym
                designed to cater to all fitness levels and interests.<br></br>{" "}
                Whether you're a seasoned athlete or just starting your fitness
                journey, our classes offer something for everyone.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-5">
              <div>
                <img src={class1} alt="class1" />
                <div className="bg-[#f92524]">
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Strength Training
                  </span>
                  <br></br>
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Resistance Training
                  </span>
                </div>
              </div>
              <div>
                <img src={class2} alt="class2" />
                <div className="bg-[#f92524]">
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Flexibility & Mobility
                  </span>
                  <br></br>
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Yoga & Pilates
                  </span>
                </div>
              </div>
              <div>
                <img src={class3} alt="class3" />
                <div className="bg-[#f92524]">
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    HIIT
                  </span>
                  <br></br>
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Circuit Training
                  </span>
                </div>
              </div>
              <div>
                <img src={class4} alt="class4" />
                <div className="bg-[#f92524]">
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Group Fitness
                  </span>
                  <br></br>
                  <span className="text-[1.2rem] font-medium text-[white] m-6">
                    Zumba or Dance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* four sections */}

        <section>
          <div className="mt-32 ml-24 mr-24">
            <div className="items-center">
              <h6 className="text-4xl font-semibold text-[color:var(--text-dark)] mb-8 text-center">
                Our Trainers
              </h6>
              <p className="text-slate-500 text-center">
                Our trainers are more than just experts in exercise; they are
                passionate about helping you achieve your health<br></br> and
                fitness goals. Our trainers are equipped to tailor workout
                programs to meet your unique needs.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3">
              <div>
                <img src={trainer1} alt="trainer1" />
              </div>
              <div className="ml-10 mt-16">
                <h6 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)]">
                  James Roadriguez
                </h6>
                <h5>Strength and Conditioning</h5>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="text-slate-500 ">
                  With a background in competitive<br></br> sports, he's
                  dedicated to helping you<br></br> reach your peak physical
                  performance.
                </p>
              </div>
              <div>
                <img src={trainer2} alt="trainer2" />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="ml-10 mt-16">
                <h6 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)]">
                  Mark Harris
                </h6>
                <h5>HIIT and Functional</h5>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="text-slate-500 ">
                  His energetic and dynamic workouts are<br></br> designed to
                  push your limits, boost<br></br> metabolism, and torch
                  calories.
                </p>
              </div>
              <div>
                <img src={trainer3} alt="trainer3" />
              </div>
              <div className="ml-10 mt-16">
                <h6 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)]">
                  Emily Davis
                </h6>
                <h5>Yoga and Mindfulness</h5>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="text-slate-500 ">
                  Emily's sessions are about physical<br></br> postures and also
                  about cultivating<br></br> inner peace and mindfulness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* fift sections */}

        <section>
          <div className="ml-16 mr-16">
            <div>
              <h6 className="text-4xl font-semibold text-[color:var(--text-dark)] mb-8 mt-36 text-center">
                Our Pricing
              </h6>
              <p className="text-slate-500 text-center">
                Our trainers are more than just experts in exercise; they are
                passionate about helping you achieve your health<br></br> and
                fitness goals. Our trainers are equipped to tailor workout
                programs to meet your unique needs.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-16 ">
              <div className="card text-center shadow-lg">
                <div className="m-16">
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Basic Plan
                  </h1>
                  <img
                    src={basicplan}
                    alt="basic plan"
                    className="inline-block w-[90px] mb-4"
                  />
                  <p className="text-slate-500">
                    Our Basic Plan is the perfect starting point for individuals
                    looking to kickstart their fitness journey or maintain an
                    active lifestyle.
                  </p>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Key Features
                  </h1>
                  <div className="text-slate-500">
                    <p>Smart Workout Plan </p>
                    <p>At home workouts</p>
                  </div>
                  <button
                    type="button"
                    className="mt-28 w-64 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Join Now
                  </button>
                </div>
              </div>
              <div className="card text-center shadow-lg">
                <div className="m-16">
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Weekly Plan
                  </h1>
                  <img
                    src={weeklyplan}
                    alt="weekly plan"
                    className="inline-block w-[90px] mb-4"
                  />
                  <p className="text-slate-500">
                    Our weekly plan is designed to provide structure and variety
                    to your workouts, ensuring you stay motivated and on track.
                  </p>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Key Features
                  </h1>
                  <div className="text-slate-500">
                    <p>SPRO Gyms</p>
                    <p>Smart workout plan</p>
                    <p>At home workouts</p>
                  </div>
                  <button
                    type="button"
                    className="mt-20 w-64 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Join Now
                  </button>
                </div>
              </div>
              <div className="card text-center shadow-lg">
                <div className="m-16">
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Monthly Plan
                  </h1>
                  <img
                    src={monthlyplan}
                    alt="monthly plan"
                    className="inline-block w-[90px] mb-4"
                  />
                  <p className="text-slate-500">
                    With this flexible membership, you'll have access to our
                    state-of-the-art gym facilities, expert trainers, and a
                    vibrant fitness community
                  </p>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <h1 className="text-[1.2rem] font-semibold text-[color:var(--text-dark)] mb-4 mt-8">
                    Key Features
                  </h1>
                  <div className="text-slate-500">
                    <p>ELITE Gyms & Classes</p>
                    <p>PRO Gyms</p>
                    <p>Smart workout plan</p>
                    <p>At home workouts</p>
                    <p>Personal Training</p>
                  </div>
                  <button
                    type="button"
                    className="mt-8 w-64 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* six sections  */}

        <section>
          <div className="ml-16 mr-16">
            <div>
              <h6 className="text-4xl font-semibold text-[color:var(--text-dark)] mb-8 mt-36">
                What People Says About Us?
              </h6>
              <p className="text-slate-500 ">
                These testimonials serve as a testament to our commitment to
                helping individuals achieve their fitness goals,<br></br> and
                fostering a supportive environment for everyone who walks
                through our doors.
              </p>
            </div>
            <div className="container py-4 px-4 justify-center">
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper-"
                slidesPerView={5}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <CardSwiper />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
