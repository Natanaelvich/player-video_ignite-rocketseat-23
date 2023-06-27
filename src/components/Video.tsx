import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'

export function Video() {
  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonINdex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonINdex
      ]

    return currentLesson
  })

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
