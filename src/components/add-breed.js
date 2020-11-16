import React, { useState } from "react";
import { breedsCollection } from "../data/firebase";
import "./add-breed.css";
import BreedForm from "./breed-form";
 
function AddBreed() {
 const [isSaving, setIsSaving] = useState(false);
 const [formMessage, setFormMessage] = useState("");
 
 const onBreedSumbit = async (title, rating, origin, size, weight ) => {
 setIsSaving(true);
 setFormMessage("");
 
 try {
 await breedsCollection.add({
  title, 
  rating, 
  origin, 
  size, 
  weight
 });
 setFormMessage("Saved successfully!");
 console.log("Saved!");
 
 } catch (error) {
 setFormMessage("Something went wrong. Please try again!");
 console.error(error);
 }
 
 setIsSaving(false);
 };
 
 return (
 <div className="add-container">
 <h1>Add Breed</h1>
 <BreedForm onSubmit={onBreedSumbit} isSaving={isSaving} message={formMessage} />
 </div>
 );
}
 
export default AddBreed;
