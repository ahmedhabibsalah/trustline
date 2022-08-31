import React from "react";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";
import News from "./News/News";
import Solutions from "./Solutions/Solutions";
import Task from "./Task/Task";
import Team from "./Team/Team";
import WhyTrustline from "./whyTrust/WhyTrustline";
function Home() {
  return (
    <>
      <Hero />
      <WhyTrustline />
      <Solutions />
      <Team />
      <Clients />
      <Task />
      <News />
    </>
  );
}

export default Home;
