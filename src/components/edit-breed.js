import React, { useState, useEffect } from "react";
import { breedsCollection } from "../data/firebase";
import "./edit-breed.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BreedForm from "./breed-form";

function EditBreed(props) {
const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [breedData, setBreedData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState(null);

  useEffect(() => {
    async function getBreed() {
      setIsLoading(true);
      try {
        const breedSnapshot = await breedsCollection.doc(id).get();

        if (!breedSnapshot.exists) {
          throw new Error("No such breed exists!");
        }

        const data = breedSnapshot.data();
        setBreedData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again");
        console.error(error);
      }
      setIsLoading(false);
    }

    getBreed(); 
  }, [id]);

  const onBreedSubmit = async (title, 
    origin, 
    rating, 
    size, 
    weight, 
   ) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      await breedsCollection.doc(id).set({
        title,
        origin, 
        rating, 
        size, 
        weight, 
      });
      setFormMessage("Saved successfully!");

    }catch (error) {
      setFormMessage("Something went wrong editing this breed. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Breed</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {breedData && (
        <BreedForm
        initialState={breedData}
        onSubmit={onBreedSubmit}
        isSaving={isSaving}
        message={formMessage}
        />
      )}
      </div>);
}

export default EditBreed;

