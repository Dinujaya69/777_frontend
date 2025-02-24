import { PromoCarousel } from "@/components/Hero/PromoCarousel";
import ProductGrid from "@/components/Hero/ProductCarosol";
import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <PromoCarousel />
      <ProductGrid />
    </MainLayout>
  );
};

export default page;
