// import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Image from 'next/image'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, vero.</p>
        <Button url="/portfolio" text='See our Works' />
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt='' className={styles.img} />
      </div>
     
    </div>    
  )
}
