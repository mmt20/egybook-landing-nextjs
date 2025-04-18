import MouseCursuerICon from "@/components/ui/icons/MouseCursuerICon";
import PiggyBankIcon from "@/components/ui/icons/PiggyBankIcon";
import VRICon from "@/components/ui/icons/VRICon";
import { IDestination, IFeature, IHotel, IPlace, ILocation, IDayNames, IMonthsNames } from "@/interfaces";

export const hotelData: IHotel[] = [
  {
    image: "/images/kempinski.png",
    location: "Soma Bay",
    name: "Kempinski Hotel Soma Bay",
    price: "$214",
    rating: 4.7,
    reviews: 1274,
  },
  {
    image: "/images/jw-marriott.png",
    location: "Cairo",
    name: "JW Marriott Hotel Cairo",
    price: "$194",
    rating: 4.6,
    reviews: 2274,
  },
  {
    image: "/images/kempinski.png",
    location: "Soma Bay",
    name: "Kempinski Hotel Soma Bay",
    price: "$214",
    rating: 4.7,
    reviews: 1274,
  },
  {
    image: "/images/jw-marriott.png",
    location: "Cairo",
    name: "JW Marriott Hotel Cairo",
    price: "$194",
    rating: 4.6,
    reviews: 2274,
  },
];

export const placeData: IPlace[] = [
  {
    image: "/images/redSea.png",
    name: "Red Sea",
  },
  {
    image: "/images/somaBay.png",
    name: "Soma Bay",
  },
  {
    image: "/images/giza.png",
    name: "Giza",
  },
  {
    image: "/images/nile.png",
    name: "Nile",
  },
  {
    image: "/images/nabqBay.png",
    name: "Nabq Bay",
  },
  {
    image: "/images/redSea.png",
    name: "Red Sea",
  },
];

export const featuresData: IFeature[] = [
  {
    icon: MouseCursuerICon,
    titleParts: [
      { text: "Seamless", color: "#D2AC71", fontWeight: "semibold" },
      { text: "& Smart", color: "#30A46C", fontWeight: "semibold" },
      { text: "Booking", color: "white", fontWeight: "bold" },
    ],
    description: "Quick, user-friendly platform that simplifies the reservation process.",
  },
  {
    icon: VRICon,
    titleParts: [
      { text: "Immersive", color: "#30A46C", fontWeight: "semibold", italic: true },
      { text: "VR Previews", color: "white", fontWeight: "bold" },
    ],
    description: "Explore hotels and rooms in 360° before you book—giving you total confidence.",
  },
  {
    icon: PiggyBankIcon,
    titleParts: [
      { text: "Exclusive", color: "#30A46C", fontWeight: "semibold" },
      { text: "Best-Price Deals", color: "white", fontWeight: "bold" },
    ],
    description: "Save more with special offers and real-time price comparisons.",
  },
];

export const destinationData: IDestination[] = [
  {
    image: "/images/cairo.png",
    name: "Cairo",
    description: "Unveil secrets of ancient wonders.",

    gradient: "linear-gradient(to top left,rgba(252, 143, 80, 0.42),#ff7b2f)",
  },
  {
    image: "/images/hurghada.png",
    name: "Hurghada",
    description: "Sunshine, beaches, and vibrant reefs.",
    gradient: "linear-gradient(to top left,rgba(77, 118, 161, 0.69),#3c79bb)",
  },
  {
    image: "/images/sharm.png",
    name: "Sharm",
    description: "Dive into breathtaking underwater landscapes.",
    gradient: "linear-gradient(to top left,rgba(135, 61, 61, 0.83), #873d3d)",
  },
];

export const popularLocations: ILocation[] = [
  { name: "Cairo", description: "City in Egypt" },
  { name: "Alexandria", description: "City in Egypt" },
  { name: "Hurghada", description: "City in Egypt" },
];

export const monthNames: IMonthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dayNames: IDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
