import React from "react";
import CarouselBanner from "./CarouselBanner";
import Popular from "./Popular";

function Home() {
  return (
    <>
      <CarouselBanner />
      <Popular com="popular" />
      <Popular com="top_rated" />
      <Popular com="upcoming" />
      <Popular com="now_playing" />
    </>
  );
}

export default Home;
