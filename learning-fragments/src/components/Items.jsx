import styles from "./Item.css";

const Items = ({foodItem}) => {
  return(
    <li className={`${styles.kg-items} list-group-item`}>
      <span className="kg-span">{foodItem}</span>
    </li>
  )
};

export default Items;