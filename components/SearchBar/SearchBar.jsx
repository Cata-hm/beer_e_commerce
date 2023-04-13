import React from "react";
import styles from "./searchBar.module.css";
// import magnifyingGlassIcon from "../../icons/search.png"; // Assuming you have the magnifying glass image file in your project

const SearchBar = ({ onChange }) => {
  // const getInfo = () => {
  //   fetch("/api/hello/route/10170")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Search burger, pizza, drink or etc..."
        onChange={onChange}
      />
      <div
        className={styles.magnifyingGlassIcon}
      />
    </div>
  );
};

export default SearchBar;
