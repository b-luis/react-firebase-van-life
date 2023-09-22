import React from "react";
import VanItem from "../../components/Vans/VanItem";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";

const styles = {
  vanSection: "px-6 py-[50px]",
  vanTitle: "font-semibold text-xl flex-row lg:text-2xl",
  vanDiv: "flex gap-10 flex-wrap justify-center",
  vanNav: "flex gap-2 py-5",
};

const Van = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vanData, setVanData] = useState([]);
  const firstRender = useRef(true);

  const typeFilter = searchParams.get("type");

  if (firstRender) {
    useEffect(() => {
      {
        fetch("api/vans")
          .then((res) => res.json())
          .then((data) => setVanData(data.vans));
      }
    }, []);
  }

  const displayedVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

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
          <VanItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Van;
