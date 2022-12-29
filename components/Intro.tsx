import styles from './Intro.module.scss'
import Config from '../pages/_config'

export default function Intro() {
  return <div className={styles.intro}>
    {Config.intro}
  </div>
}
