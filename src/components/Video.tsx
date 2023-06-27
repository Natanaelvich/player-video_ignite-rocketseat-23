import ReactPlayer from 'react-player'
import { useAppDispatch, useAppSelector } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        playing
        onEnded={handlePlayNext}
      />
    </div>
  )
}
