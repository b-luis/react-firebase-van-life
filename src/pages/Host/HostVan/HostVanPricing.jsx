import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/useFetchDetails";

const HostVanPricing = () => {
  const { id } = useParams();
  const { vanData } = useFetchDetails(`/api/host/vans/${id}`, id);
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
