import React from "react";
import { Link } from "react-router-dom";

const styles = {
  notFoundDiv:
    "px-9 mx-auto flex flex-col justify-center lg:max-w-[900px] lg:h-[650px] h-[400px] lg:px-0",
  notFoundText: "py-4 font-semibold text-4xl",
  notFoundLink:
    "bg-[#161616] text-white py-3 w-[50%] text-center md:w-[20%] font-bold hover:bg-[#804a1c]",
};

const NotFound = () => {
  return (
    <div className={styles.notFoundDiv}>
      <h1 className={styles.notFoundText}>
        Sorry, the page you were looking for was not found. But, don't fret! You
        can return home. (❁´◡`❁)
      </h1>
      <Link to="/" className={styles.notFoundLink}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
