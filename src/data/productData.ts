import SHR1 from "@/assets/T-shirts/shirt 1.png";
import SHR2 from "@/assets/T-shirts/shirt 2.png";
import SHR3 from "@/assets/T-shirts/shirt 3.png";
import SHR4 from "@/assets/T-shirts/shirt 4.png";
import SHR5 from "@/assets/T-shirts/shirt 5.png";
import SHR6 from "@/assets/T-shirts/shirt 6.png";
import SHR7 from "@/assets/T-shirts/shirt 7.png";
import SHR8 from "@/assets/T-shirts/shirt 8.png";

export const categories = ["FEATURED", "NEW ARRIVAL", "SPECIALS"];

export const products = {
  FEATURED: [
    {
      id: 1,
      name: "Bold as a Lion Tee",
      price: 20.0,
      image: SHR1,
      sizes: ["XS", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
    {
      id: 2,
      name: "Claiming Crowns Tee",
      price: 25.0,
      image: SHR2,
    },
  ],

  "NEW ARRIVAL": [
    {
      id: 3,
      name: "Pray Without Ceasing Hoodie",
      price: 38.0,
      image: SHR3,
    },
    {
      id: 4,
      name: "Faith Over Fear Tee",
      price: 22.0,
      image: SHR4,
    },
  ],

  SPECIALS: [
    {
      id: 5,
      name: "Grace Upon Grace Hoodie",
      price: 40.0,
      image: SHR5,
    },
    {
      id: 6,
      name: "Victory in Christ Tee",
      price: 30.0,
      image: SHR6,
    },
    {
      id: 7,
      name: "Anime Legends Tee",
      price: 28.0,
      image: SHR7,
    },
    {
      id: 8,
      name: "Ninja Warrior Tee",
      price: 25.0,
      image: SHR8,
    },
  ],
};
