import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { breedsCollection } from "../data/firebase";
import Breed from "./breed";
import "./breed-listing.css"

function BreedListing() {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
   
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBreeds(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your movie ratings. Please try again.");
      console.error(error);
    };
    const unsubscribe = breedsCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="breeds-container">
      <h1>Breeds</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="breed-list">
        {breeds.map((breedDoc) => {
          const breedId = breedDoc.id;
          const breedData = breedDoc.data();
          return (
            <li key={breedId}>
              <Breed id={breedId} data={breedData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreedListing;
