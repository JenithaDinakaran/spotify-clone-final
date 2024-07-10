// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/display'
import { PlayerContext } from './context/playercontext'

const App = () => {
  const {audioRef, track } = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App