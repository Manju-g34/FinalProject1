/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./TrackIssue.module.css";
import Header from "./Header";

function TrackIssue() {
  return (
    <main className={styles.container}>
      <Header />
      <h1 className={styles.title}>Track your issue</h1>
      <section className={styles.searchContainer}>
        <form className={styles.searchForm}>
          <div className={styles.inputColumn}>
            <div className={styles.inputField}>
              <label htmlFor="issueId" className={styles.visually }>
                Enter Issue id
              </label>
              <input
                id="issueId"
                className={styles.input}
                type="text"
                placeholder="Enter Issue id"
              />
            </div>
          </div>
          <div className={styles.buttonColumn}>
            <button type="submit" className={styles.button}>
              Search
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default TrackIssue;
