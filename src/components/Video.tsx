import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { SlideRight } from "../animations/animate";

const Video = ({
  playing,
  replay,
  setReplay,
  showLogo,
  setShowLogo,
  setPlaying,
}: {
  playing: boolean;
  replay: boolean;
  setReplay: (value: boolean) => void;
  showLogo: boolean;
  setShowLogo: (value: boolean) => void;
  setPlaying: (value: boolean) => void;
}) => {
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (replay) {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
      setPlaying(true);
      setReplay(false);
      setShowLogo(false);
    }
  }, [replay, setReplay, setShowLogo]);

  return (
    <motion.div
      variants={SlideRight(0.4, 150)}
      initial="initial"
      whileInView="animate"
      className="player-wrapper"
    >
      {showLogo ? (
        <div
          className="absolute
          inset-0 flex items-center justify-center"
        >
          <img src="/logo.jpg" alt="Video Player" className="rounded-full" />
        </div>
      ) : (
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url="/palhades-demo.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
        />
      )}
    </motion.div>
  );
};

export default Video;
