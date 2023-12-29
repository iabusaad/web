
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
// import Illust from "public/illust"

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();


}
 

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        <Link href="/blog/testId" className={styles.container} key={item.id} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg?fmt=webp&w=350"
              alt="pic"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
      </Link>
    })}
      ))
    </div>
  );
};

export default Blog;