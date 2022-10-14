import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap">
  

<Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_GhkD0k.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>
<Player
  autoplay
  loop
  src="https://assets8.lottiefiles.com/packages/lf20_VSBhlA7ElW.json"
  style={{ height: '300px', width: '300px' }}
>
</Player><Player
  autoplay
  loop
  src="https://assets3.lottiefiles.com/packages/lf20_nTfkVR.json"
  style={{ height: '300px', width: '300px' }}
>
</Player><Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json"
  style={{ height: '300px', width: '300px' }}
>
</Player><Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
  style={{ height: '300px', width: '300px' }}
>
</Player><Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_rycdh53q.json"
  style={{ height: '300px', width: '300px' }}
>
</Player><Player
  autoplay
  loop
  src="https://assets1.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>

    </div>
  )
}

export default Home
