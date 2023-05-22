import React from "react";
import { useState, useEffect, useContext } from "react";

// internal import
import { HeroSection } from "@/Components";

const Home =() => {
  return (
    <div>
      <HeroSection account="sarvad" tokenData="data"/>
    </div>
  )
}


export default Home;