import styles from "./App.module.css";

import SearchIcon from "../Icons/SearchIcon";
import ClearIcon from "../Icons/ClearIcon";
import ClockIcon from "../Icons/ClockIcon";

function App() {
  return (
    <div className={styles.App}>
      Icons Example
      <SearchIcon />
      <ClearIcon />
      <ClockIcon />
    </div>
  );
}

export default App;
