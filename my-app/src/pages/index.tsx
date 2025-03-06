"use client"

import React from "react";
import styles from "@/styles/mainPage/page.module.scss";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Link href={"/block_blast/"}><h1>hello world</h1></Link>
      </div>

    </>
  );
}