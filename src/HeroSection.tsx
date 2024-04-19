import { useState } from "react";
import "./HeroSection.css"; // Import CSS for styling
import videoSrc from "./assets/storr.mp4";
import NavBar from "./NavBar";
import "./App.css";

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div>
      <NavBar />
      {/* Hero Section with Video Background */}
      <div className="fixed h-screen top-0 left-0 w-full overflow-hidden z-10">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support this video type.
          </video>
        ) : (
          <div className="hero-video-error">
            <h2>Video Not Available</h2>
            <p>Please check back later.</p>
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
        {/* Text Overlay and Mask */}

        <div className="absolute top-1/2 left-0 w-full flex items-center justify-center text-center text-white z-30">
          <h2 className="tracking-wider font-bebas sm:text-base md:text-4xl  lg:text-6xl ">UK Based Director & Filmaker</h2>        
        </div>
        <a href="#nextSection" className="absolute pb-10 bottom-0 left-1/2 transform -translate-x-1/2 text-white  z-40">
            <span className="arrow down"></span>
          </a>
      </div>
    </div>
  );
};

export default HeroSection;
