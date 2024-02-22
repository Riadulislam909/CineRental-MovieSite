import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { ThemeContext } from "./contexts";
const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
