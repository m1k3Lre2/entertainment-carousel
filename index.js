const { useState, useEffect } = React;

const slides = [
  {
    image: "https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Slide+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    image: "https://via.placeholder.com/1920x1080/7f7fff/333333?text=Slide+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    image: "https://via.placeholder.com/1920x1080/7fff7f/333333?text=Slide+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    image: "https://via.placeholder.com/1920x1080/ffff7f/333333?text=Slide+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    image: "https://via.placeholder.com/1920x1080/ff7fff/333333?text=Slide+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

function EntertainmentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useState(new Audio(slides[currentIndex].audio))[0];

  useEffect(() => {
    audioRef.src = slides[currentIndex].audio;
    if (isPlaying) {
      audioRef.play();
    }
    return () => {
      audioRef.pause();
    };
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  return React.createElement("div", { className: "carousel-container" },
    React.createElement("img", {
      src: slides[currentIndex].image,
      className: "carousel-image",
    }),
    React.createElement("button", { onClick: togglePlay }, isPlaying ? "Pause" : "Play")
  );
}

// Render the app
ReactDOM.render(
  React.createElement(EntertainmentCarousel),
  document.getElementById("root")
);
