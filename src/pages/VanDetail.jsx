import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const styles = {
  vanDetailContainer: "px-6 py-[45px] flex flex-col ",
  vanDiv: "mt-6 md:max-w-[700px] md:mx-auto",
  vanLink: "underline",
  vanType: "",
  vanImg: "rounded-md mb-10",
  vanName: "font-semibold text-2xl py-4 lg:text-3xl",
  vanPrice: "font-semibold text-lg lg:text-xl",
  vanDescription: "text-sm py-5 lg:text-lg",
  vanButton: "bg-[#FF8C38] text-white font-semibold w-full rounded-md py-4",
};

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className={styles.vanDetailContainer}>
      <NavLink to="/vans" className={styles.vanLink}>
        Back to all vans
      </NavLink>
      {van ? (
        <div className={styles.vanDiv}>
          <img className={styles.vanImg} src={van.imageUrl} alt="" />
          <i className={`vantype ${van.type} selected ${styles.vanType}`}>
            {van.type}
          </i>
          <h2 className={styles.vanName}>{van.name}</h2>
          <p className={styles.vanPrice}>
            ${van.price}
            <span className="font-light text-md">/day</span>
          </p>
          <p className={styles.vanDescription}>{van.description}</p>
          <button className={styles.vanButton}>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
