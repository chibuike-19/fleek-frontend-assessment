import { HiBuildingStorefront } from "react-icons/hi2";
import { VscPreview } from "react-icons/vsc";
import { GrNotes } from "react-icons/gr";
import { MdOutlinePermMedia } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import Image1 from "../assets/image 2.svg"
import Image2 from "../assets/image 5.svg"
import Image3 from "../assets/image.svg"
import Image4 from "../assets/image (1).svg"
import Image5 from "../assets/image (2).svg"
import Image6 from "../assets/image (3).svg"

export interface IProductCardProps {
  id: number;
  price: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

export const NavItems = [
  { label: "Store", value: "store", link: "/" },
  { label: "Reviews", value: "reviews", link: "/" },
  { label: "Blog", value: "blog", link: "/" },
  { label: "Media", value: "media", link: "/" },
  { label: "Locations", value: "locations", link: "/" },
  { label: "Contact", value: "contact", link: "/" },
];

export const MobileNavItems = [
  { label: "Store", value: "store", link: "/", icon: <HiBuildingStorefront /> },
  { label: "Reviews", value: "reviews", link: "/", icon: <VscPreview /> },
  { label: "Blog", value: "blog", link: "/", icon: <GrNotes /> },
  { label: "Media", value: "media", link: "/", icon: <MdOutlinePermMedia /> },
  { label: "Locations", value: "locations", link: "/", icon: <CiLocationOn /> },
  {
    label: "Contact",
    value: "contact",
    link: "/",
    icon: <MdOutlinePermContactCalendar />,
  },
];

export const ProductCardData: IProductCardProps[] = [
  {
    id: 1,
    price: 70.00,
    title: "PS5 Controller",
    desc: "A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.",
    img: Image1,
    tags: ["Tech", "Black"],
  },
  {
    id: 1,
    price: 120.00,
    title: "Gamecube",
    desc: "A compact and durable GameCube console with a unique, cube-shaped design.",
    img: Image2,
    tags: ["Tech", "grey"],
  },
  {
    id: 1,
    price: 350.0,
    title: "Steam Deck",
    desc: "A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.",
    img: Image3,
    tags: ["Tech", "Black"],
  },
  {
    id: 1,
    price: 50.0,
    title: "Sega Handheld",
    desc: "A classic Sega handheld console with a vibrant screen and a library of iconic games.",
    img: Image4,
    tags: ["Tech", "Black"],
  },
  {
    id: 1,
    price: 220.0,
    title: "Playdate",
    desc: "A charming, pocket-sized Playdate console with a unique crank controller.",
    img: Image5,
    tags: ["Tech", "Yellow"],
  },
  {
    id: 1,
    price: 350.0,
    title: "Nintendo Switch",
    desc: "Console with a vibrant display, detachable Joy-Con controllers.",
    img: Image6,
    tags: ["Tech", "Black"],
  },
];
