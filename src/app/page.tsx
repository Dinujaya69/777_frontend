import { PromoCarousel } from "@/components/common/PromoCarousel";
import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <PromoCarousel />
      </div>
    </MainLayout>
  );
};

export default Home;
