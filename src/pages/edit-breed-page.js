import React from "react";
import { Helmet } from "react-helmet";
import EditBreed from "../components/edit-breed";

function  EditbBreedPage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBreed />
    </main>
  );
}

export default  EditbBreedPage;
