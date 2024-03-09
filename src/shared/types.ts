export enum SelectedPage {
    Home = "home",
    About = "about",
    WorkoutPrograms = "workoutprograms",
    Gallery = "gallery",
    ContactUs = "contactus",
    Recipe = "recipe",
    Store = "store"
  }

export type UserData = {
  id: number;
  text: string;
  img:string;
  button: string;
}

export type MerchData = {
  item: string;
  img: string;
}

export type RecipeData = {
  food: string;
  img: string;
}

export type CaroData = {
  id: number;
  img: string;
  days: string;
  time: string;
}

export type DayData = {
  id: number;
  days: string;
  workday: string;
}
export type workoutsData={
  id: number;
  workout: string;
  title: string;
  time: string;
}

export type ContentData={
  id: number;
  title1: string;
  title2: string;
  title3: string;
  time1: string;
  time2: string;
  time3: string;
}

export type Exercise={
  name: string;
  gifUrl: string;
  id: number;
  target: string;
}

export type Details={
  Title: string;
 Image: string;

}

export type DietDate={
  img: string;
}