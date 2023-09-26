import React from "react";
import VanItem from "../../components/Vans/VanItem";
import Loading from "../../components/Layout/Loading";
import { useEffect, useState } from "react";
import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

const styles = {
  vanSection: "px-6 py-[50px] ",
  vanTitle: "font-semibold text-xl flex-row lg:text-2xl",
  vanDiv: "flex gap-10 flex-wrap justify-center",
  vanNav: "flex gap-2 py-5",
};

export const loader = () => {
  return getVans();
};

const Van = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [vanData, setVanData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");
  const vanData = useLoaderData();

  // useEffect(() => {
  //   const loadVans = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVanData(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadVans();
  // }, []);

  const displayedVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  // if (loading) {
  //   return <Loading />;
  // }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section className={styles.vanSection}>
      <h2 className={styles.vanTitle}>Explore our vans options</h2>
      <nav className={styles.vanNav}>
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : null
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : null
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : null
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear
          </button>
        ) : null}
      </nav>

      <div className={styles.vanDiv}>
        {displayedVans.map((data) => (
          <VanItem key={data.id} searchParams={searchParams} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Van;
