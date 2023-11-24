import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>CRUD for Categories</h1>
      </section>
      <Header/>
    </main>
  )
}

function Header(){

  return(<header>
    1
  </header>)
}