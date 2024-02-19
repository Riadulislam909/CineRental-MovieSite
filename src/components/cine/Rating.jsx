/* eslint-disable react/prop-types */
import Star from "../../assets/star.svg";

const Rating = ({ value }) => {
  let stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img src={star} alt="star" key={index} height="14" width="14" />
      ))}
    </>
  );
};

export default Rating;
