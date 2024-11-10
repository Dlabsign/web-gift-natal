import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { FiVolumeX, FiVolume2 } from "react-icons/fi"; // Import icons for mute/unmute

const BackgroundSound = () => {
  // Use useSound to load the sound
  const [play, { stop }] = useSound("/Christmas Is Jesus.mp3", { loop: true });
  const [isPlaying, setIsPlaying] = useState(true);

  // Play the sound when the component mounts
  useEffect(() => {
    play(); // Start playing the sound on mount

    // Stop the sound when the component unmounts
    return () => stop();
  }, [play, stop]);

  // Toggle sound on/off
  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleSound}
        className="fixed bottom-5 right-5 bg-gray-800 p-3 rounded-full text-white shadow-md hover:bg-gray-700 transition-colors flex gap-2"
      >
        <h1 className="font-SourceSerifProItl">Turn On volume</h1>
        {isPlaying ? <FiVolume2 size={24} /> : <FiVolumeX size={24} />}
      </button>
    </div>
  );
};

export default BackgroundSound;
