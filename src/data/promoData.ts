import caro1 from "@/assets/carosal/caro1.jpg";
import caro2 from "@/assets/carosal/caro2.jpg";
import caro3 from "@/assets/carosal/caro3.jpg";

export const promoSlides = [
  {
    id: 1,
    title: "Dragon Ball Z T-Shirt",
    discount: "Save 15%",
    description: "Unleash your power with this iconic design.",
    image: caro1,
    animation: { y: [50, 0], opacity: [0, 1] },
  },
  {
    id: 2,
    title: "Naruto Shippuden T-Shirt",
    discount: "Exclusive 20% Off",
    description: "Run your path with this powerful design.",
    image: caro2,
    animation: { scale: [0.8, 1], opacity: [0, 1] },
  },
  {
    id: 3,
    title: "Attack on Titan T-Shirt",
    discount: "Limited Time 10% Off",
    description: "Gear up for battle with this heroic design.",
    image: caro3,
    animation: { x: [-50, 0], opacity: [0, 1] },
  },
];