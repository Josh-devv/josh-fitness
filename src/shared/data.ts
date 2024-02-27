import { CaroData, MerchData, RecipeData } from "@/shared/types"
import { UserData } from "@/shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"
import m1 from "@/assets/m1.png"
import rec2 from "@/assets/rec2.png"
import rec3 from "@/assets/rec3.png"
import rec4 from "@/assets/rec4.png"
import rec5 from "@/assets/rec5.png"
import slid from "@/assets/slid.png"
import slid1 from "@/assets/slid1.png"
import slid2 from "@/assets/slid2.png"
import slid3 from "@/assets/slid3.png"
import slid4 from "@/assets/slid4.png"
import p1 from "@/assets/pt3.png"
import p2 from "@/assets/pt4.png"
import p3 from "@/assets/pt6.png"
import p4 from "@/assets/p9.png"
import p5 from "@/assets/pt4.png"
import p11 from "@/assets/p11.png"
import p12 from "@/assets/p12.png"
import pt2 from "@/assets/pt2.png"
import pt5 from "@/assets/pt5.png"



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

  export const CaroItems: CaroData[] =[
    {
      img: slid,
      days: "14 days",
      time: "mins"
    },
    {
      img: slid1,
      days: "14 days",
      time: "mins"
    },
    {
      img: slid2,
      days: "14 days",
      time: "mins"
    },
    {
      img: slid3,
      days: "14 days",
      time: "mins"
    },
    {
      img: slid4,
      days: "14 days",
      time: "mins"
    }
  ]
  export const CaroItems1: CaroData[] =[
    {
      img: p1,
      days: "14 days",
      time: "mins"
    },
    {
      img: p2,
      days: "14 days",
      time: "mins"
    },
    {
      img: p3,
      days: "14 days",
      time: "mins"
    },
    {
      img: p4,
      days: "14 days",
      time: "mins"
    },
    {
      img: p5,
      days: "14 days",
      time: "mins"
    }
  ]
  export const CaroItems2: CaroData[] =[
    {
      img: p11,
      days: "14 days",
      time: "mins"
    },
    {
      img: p12,
      days: "14 days",
      time: "mins"
    },
    {
      img: pt2,
      days: "14 days",
      time: "mins"
    },
    {
      img: pt5,
      days: "14 days",
      time: "mins"
    },
    {
      img: p11,
      days: "14 days",
      time: "mins"
    }
  ]
  