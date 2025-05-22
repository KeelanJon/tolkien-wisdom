import { useEffect, useRef, useState } from "react"
import musicTrack from "../../public/audio/TheRingGoesSouthShort.mp3"

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2 // Lower volume for a pleasant background
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <audio ref={audioRef} src={musicTrack} loop />
      <button onClick={togglePlay}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  )
}
