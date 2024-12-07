import React, { useEffect, useState } from "react";

// Move audio instance outside of the component to persist between renders
const audio = new Audio("/audios/bg_audio.mp3");
audio.loop = true;

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("Audio autoplay failed:", error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <img
      className="sound-icon"
      width={24}
      height={24}
      src={isPlaying ? "./images/sound_on.png" : "./images/sound_off.png"}
      alt="sound-icon"
      onClick={handleClick}
    />
  );
};
