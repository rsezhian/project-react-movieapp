import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Cradskeleton({ cards, width, height }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => {
      return (
        <div className="container" key={i}>
          <Skeleton width={width} height={height}></Skeleton>
        </div>
      );
    });
}

export default Cradskeleton;
