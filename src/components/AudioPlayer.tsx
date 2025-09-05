import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // This effect handles the initial play attempt when the component loads
  useEffect(() => {
    if (audioRef.current) {
      // Browsers often block autoplay until the user interacts with the page.
      // We attempt to play, and if it works, we set the state.
      // If it fails, the console will show a message, and the audio will wait for the user to unmute.
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Autoplay was prevented by the browser. User interaction (like clicking unmute) is required.");
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMute = () => {
    const currentlyMuted = !isMuted;
    setIsMuted(currentlyMuted);
    if (audioRef.current) {
      audioRef.current.muted = currentlyMuted;
      // If the audio isn't playing yet, and the user unmutes, try playing it.
      if (!isPlaying && !currentlyMuted) {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <div className="fixed top-6 right-6 z-40 flex space-x-2">
      <audio
        ref={audioRef}
        loop
        autoPlay // Attempts to autoplay on load
        muted={isMuted}
        preload="auto"
      >
        {/* I've added a royalty-free placeholder audio file. You can replace this with your own! */}
        <source src="https://cdn.pixabay.com/audio/2022/11/17/audio_877c4126c7.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="text-white" size={16} />
        ) : (
          <Volume2 className="text-white" size={16} />
        )}
      </button>

      {/* Audio status indicator (only shows if unmuted and playing) */}
      {!isMuted && isPlaying && (
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-2 border border-white/20">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 bg-pink-300 rounded-full audio-bar animate-audio-wave"
                style={{
                  height: `${8 + Math.random() * 8}px`,
                  animationDelay: `${i * 150}ms`
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;