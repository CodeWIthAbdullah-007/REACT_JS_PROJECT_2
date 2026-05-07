import "./App.css"

import Navbar from "./components/Navbar"
import CarCard from "./components/CarCard"
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import About from "./components/About"

import cars from "./data/cars"

const App = () => {
  return (
    <>
      <Navbar />

      <section className="home">
        <h1>Car Collection</h1>

        <div className="card-container">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              model={car.model}
              color={car.color}
              price={car.price}
              image={car.image}
            />
          ))}
        </div>
      </section>

      <Profile />
      <Contact />
      <About />
    </>
  )
}

export default App