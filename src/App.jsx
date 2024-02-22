import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { MovieContext } from "./contexts/index";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      {/* pass two value together thats why passing in an obj */}
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
