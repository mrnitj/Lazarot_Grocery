import hudsonsauce from "../../../assets/User/products/hudsonsauce.png";
import avacado from "../../../assets/User/products/avacado.png";
import burger from "../../../assets/User/products/burger.png";
import eggs from "../../../assets/User/products/eggs.png";
import ice_cream from "../../../assets/User/products/ice-cream.png";
import mixednuts from "../../../assets/User/products/mixednuts.png";
import pasta from "../../../assets/User/products/pasta.png";
import spinach from "../../../assets/User/products/spinach.png";

// new Arrivals -------------------
import fish from "../../../assets/User/products/newArrivals/fish.png";
import butter from "../../../assets/User/products/newArrivals/butter.png";
import apple from "../../../assets/User/products/newArrivals/apple.png";
import berries from "../../../assets/User/products/newArrivals/berries.png";
import breads from "../../../assets/User/products/newArrivals/breads.png";
import carrots from "../../../assets/User/products/newArrivals/carrots.png";
import pesto from "../../../assets/User/products/newArrivals/pesto.png";
import almondmilk from "../../../assets/User/products/newArrivals/almondmilk.png";

export const AutoslideImages = [
    {
        id: Math.random() + Date.now(),
        image: hudsonsauce,
        title: "Hudson Sauce",
        price: "$8.92",
    },
    {
        id: Math.random() + Date.now(),
        image: avacado,
        title: "Hass Avocado",
        price: "$4.92",
    },
    {
        id: Math.random() + Date.now(),
        image: eggs,
        title: "6 eggs",
        price: "$8.92",
    },
    {
        id: Math.random() + Date.now(),
        image: mixednuts,
        title: "Mixed Nuts",
        price: "$3.01",
    },
    {
        id: Math.random() + Date.now(),
        image: ice_cream,
        title: "Ice-cream",
        price: "$3.01",
    },
    {
        id: Math.random() + Date.now(),
        image: pasta,
        title: "Pasta",
        price: "$4.92",
    },
    {
        id: Math.random() + Date.now(),
        image: spinach,
        title: "Spinach",
        price: "$8.92",
    },
    {
        id: Math.random() + Date.now(),
        image: burger,
        title: "Burger",
        price: "$8.92",
    },
];

export const NewArrivalsDatas = [
    {
        id: Math.random() + Date.now(),
        img1: fish,
        img2: butter,
        img3: apple,
    },
    {
        id: Math.random() + Date.now(),
        img1: carrots,
        img2: pesto,
        img3: eggs,
    },
    {
        id: Math.random() + Date.now(),
        img1: berries,
        img2: breads,
        img3: almondmilk,
    },
    {
        id: Math.random() + Date.now(),
        img1: berries,
        img2: breads,
        img3: almondmilk,
    },
];
export const NewArrivalsDatasMobile = [
    {
        id: Math.random() + Date.now(),
        image: fish,
        title: "Fish",
        price: "$8.2",
    },
    {
        id: Math.random() + Date.now(),
        image: butter,
        title: "Butter",
        price: "$3.5",
    },
    {
        id: Math.random() + Date.now(),
        image: apple,
        title: "Apples",
        price: "$3.5",
    },
    {
        id: Math.random() + Date.now(),
        image: carrots,
        title: "Carrots",
        price: "$2.2",
    },
    {
        id: Math.random() + Date.now(),
        image: pesto,
        title: "Pesto",
        price: "$5.45",
    },
    {
        id: Math.random() + Date.now(),
        image: eggs,
        title: "6 eggs",
        price: "$8.92",
    },
    {
        id: Math.random() + Date.now(),
        image: berries,
        title: "Fresh Berries",
        price: "$4.50",
    },

    {
        id: Math.random() + Date.now(),
        image: breads,
        title: "Whole Grain Bread",
        price: "$2.75",
    },
    {
        id: Math.random() + Date.now(),
        image: almondmilk,
        title: "Almond Milk",
        price: "$3.45",
    },
];

export const productDatas = [...AutoslideImages, ...NewArrivalsDatasMobile];
