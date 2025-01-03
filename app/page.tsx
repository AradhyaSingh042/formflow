import Footer from "@/components/client/footer";
import Header from "@/components/client/header";
import React from "react";
import Content from "@/components/client/content";

const Home = () => {
  return (
    <>
      <div className="wrapper w-full h-full overflow-x-hidden bg-white dark:bg-[#0F172A]">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Home;
