import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import { breedsCollection } from "../data/firebase";
import "./breed.css";

function Breed(props) {
  const { id, data } = props;
  const { title, origin, rating, size, weight } = data;

  const ratingString = "💙".repeat(rating) + "♡".repeat(5 - rating);

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBreed = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = breedsCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="breed">
      <div className="breed__contents">
        <div className="breed__title">{title}</div>
        <div className="breed__rating">{ratingString}</div>
        <div className="breed__year">{origin}</div>
        <div className="breed__others">{size}</div>
        <div className="breed__others">{weight}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="breed__button" disabled={isDeleting} onClick={deleteBreed}>
          <Delete />
        </button>
        <button className="breed__button" onClick={() => {}}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Breed;
