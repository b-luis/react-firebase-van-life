import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./HostVanDetail.module.css";

const HostVanDetail = () => {
  const params = useParams();
  const [hostVan, setHostVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, [params.id]);

  return (
    <>
      {hostVan ? (
        <section className={styles.van_wrapper}>
          <NavLink to="../vans" className="back-button">
            &larr; <span>Back to all vans</span>
          </NavLink>
          <div className={styles.section_wrapper}>
            <article className={styles.van_details_container}>
              <img className={styles.van_image} src={hostVan.imageUrl} alt="" />
              <div className={styles.van_info}>
                <i className={`van-type van-type.${hostVan.type}`}>
                  {hostVan.type}
                </i>
                <h3 className={styles.van_name}>{hostVan.name}</h3>
                <p>
                  ${hostVan.price}
                  <span className={styles.span}>/day</span>
                </p>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default HostVanDetail;
