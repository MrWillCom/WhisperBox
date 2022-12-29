import React from 'react'
import Head from 'next/head'
import Config from '../config'
import styles from '../styles/Home.module.scss'

import Intro from '../components/Intro'
import Card from '../components/Card'

interface HomeProps { }

interface HomeState {
  questions: Array<{
    id: number;
    created_at: string;
    question: string;
    answer?: string;
  }>
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      questions: []
    }
  }

  async fetchQuestions() {
    const questions = await (await fetch('/api/fetch')).json()
    this.setState({ questions })
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  render() {
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
          {(() => {
            var temp = []
            for (let i = 0; i < this.state.questions.length; i++) {
              const el = this.state.questions[i];
              temp.push(<Card key={el.id}>
                Q: {el.question}
                {el.answer ? <><br />A: {el.answer}</> : ''}
              </Card>)
            }
            return temp
          })()}
        </main>
      </>
    )
  }
}

export default Home
