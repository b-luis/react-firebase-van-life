import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { vanData } = useOutletContext();
  return (
    <>
      {vanData ? (
        <h3 className="text-2xl font-semibold py-5">
          ${vanData.price}.00<span className="font-normal">/day</span>
        </h3>
      ) : (
        <h2 className="fetch-data">Fetching data...</h2>
      )}
    </>
  );
};

export default HostVanPricing;
