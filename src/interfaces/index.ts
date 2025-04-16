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
