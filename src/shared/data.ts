import { MerchData, RecipeData } from "@/shared/types"
import { UserData } from "@/shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"
import m1 from "@/assets/m1.png"
import rec2 from "@/assets/rec2.png"
import rec3 from "@/assets/rec3.png"
import rec4 from "@/assets/rec4.png"
import rec5 from "@/assets/rec5.png"


export const users: UserData[] = [
    {
      id: 1,
      text: "Beginner Friendly",
      img: img1,
      button: "start today"
    },
    {
      id: 2,
      text: "Moderate to advance",
      img: img2,
      button: "Start Today",

    },
    {
      id: 3,
      text: "Weight Loss",
      img: img1,
      button: "Start Today",
    },
    {
      id: 4,
      text: "No equipment",
      img: img2,
      button: "Start Today",

    },
    {
      id: 5,
      text: "Strength Training",
      img: img1,
      button: "Start Today",

    },
   
  ]

  export const items: MerchData[] = [
    {
      item: "Bag",
      img: m1
    },
    {
      item: "Shirt",
      img: m1
    },
    {
      item: "Bottle",
      img: m1
    },
    {
      item: "Shirt",
      img: m1
    },
  ]

  export const foods: RecipeData[] = [
    {
      food: "High Protein Recipes",
      img: rec2
    },
    {
      food: "Low Carb Recipes",
      img: rec3
    },
    {
      food: "Dairy Free Recipes",
      img: rec4
    },
    {
      food: "Vegetarian Recipes",
      img: rec5
    },
  ]
  