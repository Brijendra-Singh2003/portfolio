import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div class="absolute w-full h-full top-0 left-0 -z-10">
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
