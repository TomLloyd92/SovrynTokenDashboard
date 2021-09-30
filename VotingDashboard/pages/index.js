import Layout from '../components/Layout'
import Testcall from '../components/testcall'
import TokenContainer from '../components/TokenContainer'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Layout>
      <main className={styles.main}>

      <TokenContainer/>

      </main>
      </Layout>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
