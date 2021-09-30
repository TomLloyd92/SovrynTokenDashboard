import Head from 'next/head'
import Layout from '../components/Layout'
import Testcall from '../components/testcall'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <Testcall/>
      </main>
      </Layout>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}