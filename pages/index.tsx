import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
  

  <Player
  autoplay
  loop
  src="https://assets1.lottiefiles.com/packages/lf20_ybj0fjlo.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>

   
    </div>
  )
}

export default Home
