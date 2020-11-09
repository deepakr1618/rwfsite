import React from "react";
import Header from "../../components/header/header";
import Milestone from "../../components/milestone/milestone";
import SettinUp from "../../components/settingUp/settinUp";
import TourHeritage from "../../components/virtualtour/tour";
import TourArt from "../../components/virtualtourArt/tour";
import Footer from '../../components/footer/index'

export default function landing() {
  return (
    <div>
      <Header></Header>
      <SettinUp></SettinUp>
      <Milestone />
      <TourHeritage/>
      <TourArt/>
      <Footer/>
    </div>
  );
}
