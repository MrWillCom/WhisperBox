import styles from './Intro.module.scss'
import Config from '../config'

export default function Intro() {
  return <div className={styles.intro}>
    {Config.intro}
  </div>
}
