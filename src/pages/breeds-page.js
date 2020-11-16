import React from "react";
import { Helmet } from "react-helmet";
import BreedListing from "../components/breed-listing";

function BreedsPage() {
  return (
    <main>
      <Helmet>
        <title>Breeds</title>
      </Helmet>
      <BreedListing />
    </main>
  );
}

export default BreedsPage;
