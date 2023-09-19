import { useState, useEffect, useRef } from "react";
import ListedVan from "../../components/Vans/ListedVan";

const styles = {
  hostVanDiv: "px-5 py-8 flex flex-col",
  hostVanTitle: "text-2xl font-bold",
};

const HostVans = () => {
  const [hostVan, setHostVan] = useState([]);
  const firstRender = useRef(true);

  if (firstRender) {
    useEffect(() => {
      {
        fetch("/api/host/vans")
          .then((res) => res.json())
          .then((data) => setHostVan(data.vans));
      }
    }, []);
  }

  console.log(hostVan.map((item) => item));

  return (
    <div className={styles.hostVanDiv}>
      <h2 className={styles.hostVanTitle}>Your listed vans</h2>
      {hostVan.map((van) => (
        <ListedVan key={van.id} {...van} />
      ))}
    </div>
  );
};

export default HostVans;
