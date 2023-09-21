import { useEffect, useState } from "react";

const useFetchDetails = (url, params = "") => {
  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, [params.id]);

  return { vanData };
};

export default useFetchDetails;
