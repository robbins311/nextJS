"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//val검사 helper함수
function isInvalidText(text) {
  return !text || text.trim() === "";
}

// async 필수
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
  };
  // 실제에선 thirdparty를 쓰자
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(meal);
  // nextJS의 캐싱문제 해결(새로운 글 등록 등) page or layout
  //revalidatePath("/, "layout");
  revalidatePath("/meals");
  redirect("/meals");
}
