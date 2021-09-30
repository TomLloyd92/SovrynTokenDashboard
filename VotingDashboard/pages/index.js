import Layout from '../components/Layout'
import Testcall from '../components/testcall'
import HeaderCard from '../components/HeaderCard'
import TokenContainer from '../components/TokenContainer'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Layout>
      <main className={styles.main}>

      <HeaderCard/>
      <TokenContainer/>
      </main>
      </Layout>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
