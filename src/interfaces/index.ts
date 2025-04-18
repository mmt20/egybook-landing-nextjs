export interface IHotel {
  image: string;
  location: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

export interface IPlace {
  image: string;
  name: string;
}

interface IFeatureTitlePart {
  text: string;
  color: string;
  fontWeight: "normal" | "medium" | "semibold" | "bold";
  italic?: boolean;
}

export interface IFeature {
  icon: React.ElementType;
  titleParts: IFeatureTitlePart[];
  description: string;
}

export interface IDestination {
  image: string;
  name: string;
  description: string;
  gradient: string;
}

export interface ILocation {
  name: string;
  description: string;
}

export interface IMonthsNames {
  [key: number]:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
}

export interface IDayNames extends Array<string> {
  [key: number]: "Su" | "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa";
}
