"use client"

import React from "react";
import styles from "@/styles/mainPage/page.module.scss";
import Link from 'next/link'

export default function My_page() {
    return (
        <>
            <div className={styles.header}>
                <Link href={"/"}><h1>tintin</h1></Link>
            </div>
        </>
    );
}