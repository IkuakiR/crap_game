import React from "react";
import styles from "@/styles/block_blast/page.module.scss";
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className={styles.page_container}>
                <div className={styles.game_ttl}>
                    <h1>block_blast</h1>
                </div>
                <div className={styles.main_container}>
                    <div className={styles.header}>
                        <Link href={"/"}>
                            <div className={styles.return_btn}>

                            </div>
                        </Link>
                        <div className={styles.best_score}>
                            <p>1000</p>
                        </div>

                    </div>
                    <div className={styles.current_score}>
                        <div className={styles.heart}></div>
                        <p>500</p>
                    </div>
                    <div className={styles.block_box_wrap}>
                        <div className={styles.block_box}></div>

                    </div>
                    <div className={styles.block_list}>

                    </div>

                </div>
            </div>
        </>
    );
}