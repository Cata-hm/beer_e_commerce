import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onChange }) => {

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
