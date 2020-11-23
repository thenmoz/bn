import React from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";
const Home = () => {
  const sectionHeader = {
    title: "วิธีการชำระชำระเงิน",
  };
  return (
    <>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content" />
        <div className="contact">
          <h4 className="center-content">Call Center : 089-8136666</h4>
          <h4 className="center-content">Line : Orx8888</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
