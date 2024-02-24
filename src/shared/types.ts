export enum SelectedPage {
    Home = "home",
    About = "about",
    Benefits = "benefits",
    OurClasses = "ourclasses",
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