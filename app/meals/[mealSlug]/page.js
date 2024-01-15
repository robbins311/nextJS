import React from "react";

function MealsDetailPage({ params }) {
  console.log(params);
  return (
    <>
      <h1>{params.slug}</h1>
    </>
  );
}

export default MealsDetailPage;
