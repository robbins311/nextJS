import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

//이렇게하면 리액트 컴포넌트를 쓸수있음
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        {" "}
        <h1>Delicious meals, created</h1>
        <span className={classes.highlight}>by you</span>
        <p>Choose your favorite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Special recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* suspense를 쓰면 로딩중 표시가능 */}
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
