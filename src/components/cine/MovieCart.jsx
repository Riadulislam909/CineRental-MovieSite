/* eslint-disable react/prop-types */
import { useState } from "react";
import { getImageUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
const MovieCart = ({ movie }) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handleModalClose() {
    setSelectedMovie(null);
    setShowMovieModal(false);
  }
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  }
  return (
    <>
      {showMovieModal && (
        <MovieDetailsModal onClose={handleModalClose} movie={selectedMovie} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        {/* anchor tag is used because when we click in the single movie cart it
        will pass to modal. */}
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt="cover_pic"
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCart;
