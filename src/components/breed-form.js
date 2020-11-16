import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./breed-form.css";

function BreedForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.rating === undefined) initialState.rating = "3";
  if (initialState.origin === undefined) initialState.origin = "";
  if (initialState.size === undefined) initialState.size = "";
  if (initialState.weight === undefined) initialState.weight = "";
  //if (initialState.dayPost === undefined) initialState.dayPost = 02/10/2020;

  const [title, setTitle] = useState(initialState.title);
  const [rating, setRating] = useState(initialState.rating);
  const [origin, setOrigin] = useState(initialState.origin);
  const [size, setSize] = useState(initialState.size);
  const [weight, setWeight] = useState(initialState.weight);
  //const [dayPost, setDayPost] = useState(initialState.dayPost);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onOriginChange = (event) => {
    setOrigin(event.target.value);
  };
  const onSizeChange = (event) => {
    setSize(event.target.value);
  };
  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const onBreedSumbit = async (event) => {
    if (title === ""){
      setErrorMessage("You must provide a Breed.");
      return;
    }
    event.preventDefault();
    //const dayPostInteger = Number.parseInt(dayPost, 10);
  
    onSubmit(title, rating, origin, size, weight);
  };

  return (
    <form className="breed-form" onSubmit={onBreedSumbit}>
      <h2 className="breed-form__title">Breed Details</h2>
      {message && <p className="breed-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="breed-form__controls" disabled={isSaving}>

        <label className="breed-form__label">Breed Name:</label>
        <input className="breed-form__input" type="text" value={title} onChange={onTitleChange} />

        <label className="breed-form__label">Rating:</label>
        <input
          className="breed-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />

       <label className="breed-form__label">Origin:</label>
        <input className="breed-form__input" type="text" value={origin} onChange={onOriginChange} />

        <label className="breed-form__label">Size:</label>
        <input className="breed-form__input" type="text" value={size} onChange={onSizeChange} />

        <label className="breed-form__label">Weight:</label>
        <input className="breed-form__input" type="text" value={weight} onChange={onWeightChange} />

        <input
          className="breed-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save Breed"}
        />
      </fieldset>
    </form>
  );
}

export default BreedForm;
