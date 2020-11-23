import React from "react";
import Hero from "../components/sections/Hero";
import CharmingNumber from "../components/sections/CharmingNumber"
import TableSearch from "../components/sections/TableSearch";
import BeautifulNumber from "../components/sections/BeautifulNumber";
import HotNew from "../components/sections/HotNew";
import License from "../components/sections/License"
import Onewayrich from "../components/sections/Onewayrich"
import Porsche from "../components/sections/Porsche"
import OneNineOne from "../components/sections/OneNineOne"

const Home = () => {

  return (
    <>
      <Hero />
      <License />
      <HotNew />
      <BeautifulNumber />
      <CharmingNumber />
      <Onewayrich />
      <Porsche />
      <OneNineOne />
      <TableSearch />
    </>
  );
};

export default Home;
