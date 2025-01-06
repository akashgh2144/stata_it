"use client";
import React from "react";
import HeroParallax from "./HeroParallax";
import pic2 from '../assets/Image/images/set-up/pic2.jpg'
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      pic2,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  // Add the rest of your products here...
];

const BannerHero = () => {
  return <HeroParallax products={products} />;
};

export default BannerHero;
