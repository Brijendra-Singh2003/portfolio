import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div class={styles.area}>
      <ul class={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
