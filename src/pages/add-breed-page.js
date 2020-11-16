import React from "react";
import { Helmet } from "react-helmet";
import AddBreed from "../components/add-breed";

function AddBreedPage() {
  return (
    <main>
      <Helmet>
        <title>Add Breed</title>
      </Helmet>
      <AddBreed />
    </main>
  );
}

export default AddBreedPage;
