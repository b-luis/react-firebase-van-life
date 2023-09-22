import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const styles = {
  vanDetailContainer: "px-6 py-[45px] flex flex-col ",
  vanDiv: "mt-6 md:max-w-[700px] md:mx-auto",
  vanLink: "hover:underline",
  vanType: "",
  vanImg: "rounded-md mb-10",
  vanName: "font-semibold text-2xl py-4 lg:text-3xl",
  vanPrice: "font-semibold text-lg lg:text-xl",
  vanDescription: "text-sm py-5 lg:text-lg",
  vanButton: "bg-[#FF8C38] text-white font-semibold w-full rounded-md py-4",
};

const VanDetail = () => {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);

  console.log(location);
  console.log(location.state);

  // regular/old way fetching of promises
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  /**
   * Challenge: modify the Link `to` prop below to send the user
   * back to the previous page with the searchParams included, if
   * they exist. (Remember we may not have anything in that state
   * if there were no filters applied before coming to this
   * van detail page, so make sure to "code defensively" to handle
   * that case.)
   */

  return (
    <div className={styles.vanDetailContainer}>
      {/* back to all vans goes here */}
      <Link
        to={`..?${location.state?.search}`}
        relative="path"
        className={styles.vanLink}
      >
        &larr; <span>Back to all vans</span>
      </Link>
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
        <h2 className="fetch-data detail">Fetching data...</h2>
      )}
    </div>
  );
};

export default VanDetail;
