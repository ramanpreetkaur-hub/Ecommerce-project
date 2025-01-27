import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Animation from './Animation.json';
const Anime = () => {
  return (
    <div>
    <DotLottieReact
      animationId={Animation}
      src="path/to/animation.lottie"
      loop
      autoplay
    />
    </div>
  )
}

export default Anime