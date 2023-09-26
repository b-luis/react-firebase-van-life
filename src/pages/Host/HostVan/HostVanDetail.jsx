import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import styles from "./HostVanDetail.module.css";
import { getVan } from "../../../api";

const HostVanDetail = () => {
  const [hostVan, setHostVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setHostVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, [id]);

  const activeclassNames = {
    fontWeight: "600",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    color: "#804a1c",
  };

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
            <nav className={styles.van_navigation}>
              <NavLink
                to="."
                style={({ isActive }) => (isActive ? activeclassNames : null)}
                end
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeclassNames : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeclassNames : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ vanData: hostVan }} />
          </div>
        </section>
      ) : (
        <h2 className="fetch-data detail">Fetching data...</h2>
      )}
    </>
  );
};

export default HostVanDetail;
