import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Handicraft from 'public/handicraft.png'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Handicraft} alt='' fill={true}  className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Strolytters</h1>
          <h2 className={styles.imgDesc}>Handicraft Award winnig Digital Experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are you</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id enim sit voluptate adipisci itaque, laudantium ut quos et earum! Mollitia porro, labore id corporis blanditiis dolorum vero minima perspiciatis ea temporibus. Esse quas molestiae facere incidunt tenetur nihil dolores obcaecati aliquid aspernatur,
            <br />
            <br />
            ducimus laborum corporis. Vel dolorum, neque, sunt, quisquam nobis blanditiis modi iste placeat adipisci pariatur accusantium sed. Facere iure porro illo ad in! Vel facere asperiores inventore, pariatur dolores doloremque cupiditate iusto atque neque impedit modi, necessitatibus enim dignissimos ut natus. Architecto totam, hic, tempora porro velit nostrum voluptate consectetur ipsam, id fuga sunt. Sed ipsum mollitia sapiente.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit repudiandae exercitationem culpa deserunt sint dolores natus cupiditate cumque, officia assumenda? Iure, eveniet tenetur aliquid amet at, non deserunt distinctio,
            <br />
            <br />
            est quibusdam ducimus fugit odit deleniti mollitia delectus esse magni necessitatibus. Corrupti nesciunt odio doloremque, sunt dolores quis ex eos iure dolorem ullam ipsum optio quas expedita corporis fugiat quod aliquam pariatur. Esse nam consequuntur, minima dolor cupiditate necessitatibus animi?</p>
        </div>
      </div>
      <div className={styles.button}>
      <Button url="/contact" text='Contact' />
      </div>
    </div>
  )
}

export default About
