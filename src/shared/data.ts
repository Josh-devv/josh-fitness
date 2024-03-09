import { CaroData, MerchData, RecipeData, DayData, workoutsData, ContentData, DietDate } from "@/shared/types"
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
import ii from "@/assets/high.png"



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
      id: 1,
      img: slid,
      days: "14 days",
      time: "mins"
    },
    {
      id: 2,
      img: slid1,
      days: "14 days",
      time: "mins"
    },
    {
      id: 3,
      img: slid2,
      days: "14 days",
      time: "mins"
    },
    {
      id: 4,
      img: slid3,
      days: "14 days",
      time: "mins"
    },
    {
      id: 5,
      img: slid4,
      days: "14 days",
      time: "mins"
    }
  ]
  export const CaroItems1: CaroData[] =[
    {
      id: 6,
      img: p1,
      days: "14 days",
      time: "mins"
    },
    {
      id: 7,
      img: p2,
      days: "14 days",
      time: "mins"
    },
    {
      id: 8,
      img: p3,
      days: "14 days",
      time: "mins"
    },
    {
      id: 9,
      img: p4,
      days: "14 days",
      time: "mins"
    },
    {
      id: 10,
      img: p5,
      days: "14 days",
      time: "mins"
    }
  ]
  export const CaroItems2: CaroData[] =[
    {
      id:11,
      img: p11,
      days: "14 days",
      time: "mins"
    },
    {
      id: 12,
      img: p12,
      days: "14 days",
      time: "mins"
    },
    {
      id: 13,
      img: pt2,
      days: "14 days",
      time: "mins"
    },
    {
      id: 14,
      img: pt5,
      days: "14 days",
      time: "mins"
    },
    {
      id: 15,
      img: p11,
      days: "14 days",
      time: "mins"
    }
  ]
  export const Day: DayData[] =[
    {
      id: 1,
      days: "Day 1",
      workday: "Day 1's Workout"
    },
    {
      id: 2,
      days: "Day 2",
      workday: "Day 1's Workout"
    },
    {
      id: 3,
      days: "Day 3",
      workday: "Day 1's Workout"
    },
    {
      id: 4,
      days: "Day 4",
      workday: "Day 1's Workout"
    },
    {
      id: 5,
      days: "Day 5",
      workday: "Day 1's Workout"
    },
    {
      id: 6,
      days: "Day 6",
      workday: "Day 1's Workout"
    },
    {
      id: 7,
      days: "Day 7",
      workday: "Day 1's Workout"
    },
  ]

  export const Workout: workoutsData[] = [
    { 
      id: 1, workout: 'Day 1 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 2, workout: 'Day 2 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 3, workout: 'Day 3 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 4, workout: 'Day 4 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 5, workout: 'Day 5 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 6, workout: 'Day 6 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    { 
      id: 7, workout: 'Day 7 Workout' ,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      time: "5 mins warm up"
    },
    // Add more workouts as needed
];
export const Contents: ContentData[] =[
  {
    id:1,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:2,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:3,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:4,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:5,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:6,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
  {
    id:7,
    title1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time1: "5 mins warm up",
    title2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time2: "5 mins warm up",
    title3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    time3: "5 mins warm up",
  },
]

export const Diets: DietDate[]=[
  {
    img: ii
  },
  
  {
    img:ii
  },
  {
    img: ii
  },

]