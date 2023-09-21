import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../../../hooks/useFetchDetails";

const styles = {
  imgDiv: "flex  flex-wrap justify-between",
  img: "max-w-[120px] max-w-[120px] lg:max-w-[200px]lg:max-w-[200px] rounded-md",
};

const HostVanPhotos = () => {
  const { id } = useParams();
  const { vanData } = useFetchDetails(`/api/host/vans/${id}`, id);
  return (
    <>
      {vanData ? (
        <div className={styles.imgDiv}>
          <img className={styles.img} src={vanData.imageUrl} alt="van photo" />
          <img className={styles.img} src={vanData.imageUrl} alt="van photo" />
          <img className={styles.img} src={vanData.imageUrl} alt="van photo" />
          <img className={styles.img} src={vanData.imageUrl} alt="van photo" />
        </div>
      ) : (
        <h2 className="fetch-data">Fetching data...</h2>
      )}
    </>
  );
};

export default HostVanPhotos;
