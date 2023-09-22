import { Link } from "react-router-dom";

const styles = {
  itemContainer: "xs:max-w-[45%] lg:max-w-[30%]",
  img: "rounded-md",
  itemDiv: "flex justify-between",
  itemDetails: "",
  text: "font-semibold md:text-xl lg:text-2xl py-2",
  small: "block text-xs",
};

const VanItem = ({ id, name, imageUrl, type, price, searchParams }) => {
  const upperCaseType = type[0].toUpperCase() + type.slice(1);
  return (
    <div key={id} className={styles.itemContainer}>
      <Link
        to={id}
        state={{ search: `?${searchParams.toString()}`, type: type }}
      >
        <img className={styles.img} src={imageUrl} />
        <div className={styles.itemDiv}>
          <div className={styles.itemDetails}>
            <h4 className={styles.text}>{name}</h4>
            <i className={`vantype ${type} selected`}>{upperCaseType}</i>
          </div>
          <h4 className={styles.text}>
            ${price}
            <small className={styles.small}>/day</small>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default VanItem;
