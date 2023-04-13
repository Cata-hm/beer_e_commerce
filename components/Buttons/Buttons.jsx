import AllButton from "./AllButton";
import BeerButton from "./BeerButton";
import styles from "./button.module.css";
import WineButton from "./WineButton";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
        <AllButton />
        <BeerButton />
        <WineButton />
    </div>
  );
}

export default Buttons;
