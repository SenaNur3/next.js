'use client'
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  const [data] = useState({
    title: "Blog Başlığı",
    desc: "Bu, blog gönderisinin açıklamasıdır.",
    img: "/hero.png", // Resim yolu
    username: "Yazar Adı",
    content: "Bu, blog gönderisinin içeriğidir. Uzun bir metin içerebilir."
  });
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};
export default BlogPost;
