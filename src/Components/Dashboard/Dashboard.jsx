import React from "react";
import { SectionContainer } from "./DashboardElements";

import Navbar from "../Navbar/Navbar";
import Analytics from "../Analytics/Analytics";
import FAQ from "../FAQ/FAQ";
import Earning from "../Earning/Earning";
import Transfer from "../Transfer/Transfer";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  return (
    <>
      <SectionContainer>
        <Navbar />
        <div className="grid">
          <div className="row__one">
            <Analytics />
            <FAQ />
          </div>
          <div className="row__two">
            <Earning />
            <Transfer />
            <Profile />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
