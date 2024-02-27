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
  img: string;
  days: string;
  time: string;
}