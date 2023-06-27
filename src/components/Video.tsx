import ReactPlayer from 'react-player'
import { useAppDispatch } from '../store'
import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        playing
        onEnded={handlePlayNext}
      />
    </div>
  )
}
