import Head from 'next/head'
import Config from './_config'
import styles from '../styles/Home.module.scss'

import Intro from '../components/Intro'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <meta name="description" content={Config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Intro />
      </main>
    </>
  )
}
