import React from "react";
import { Link } from "react-router-dom";

const styles = {
  listedVanDiv: "flex bg-white rounded-md p-5 mt-4",
  listedVanImg: "max-w-[80px] rounded-sm",
  listedVanDetails: "flex flex-col justify-center px-5",
  listedVanPrice: "text-sm",
  listedVanName: "font-semibold",
};

const ListedVan = ({ id, imageUrl, name, price }) => {
  return (
    <>
      <Link to={`/host/vans/${id}`}>
        <div className={styles.listedVanDiv}>
          <img className={styles.listedVanImg} src={imageUrl} alt="van image" />
          <div className={styles.listedVanDetails}>
            <h4 className={styles.listedVanName}>{name}</h4>
            <p className={styles.listedVanPrice}>${price}/day</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListedVan;
