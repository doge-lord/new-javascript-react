import styles from "./SongList.module.css";

function SongList() {
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SongList;
