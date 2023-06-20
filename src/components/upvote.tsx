'use client'

import styles from "../styles/coffee-store.module.css";

const Upvote = () => {
    function handleUpvoteBtn() {
        console.log("Handle Upvote")
    }

    return (
        <button className={styles.upvoteButton} onClick={handleUpvoteBtn}>
            Up Vote!
        </button>
    );
};

export default Upvote;