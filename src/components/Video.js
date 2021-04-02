import React, { useRef, useState } from 'react';

export default function Video({ size, mp4, webm }) {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // videoRef.current.style.top = -1000;
      // videoRef.current.style.top = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPos({
        ...pos,
        y: -1000,
      });
    }
  };

  const handleMouseMove = e => {
    const domRect = videoContainerRef.current.getBoundingClientRect();
    setPos({
      x: -(e.clientX - domRect.left) * 0.2,
      y: -(e.clientY - domRect.top) * 0.2,
    });
  };

  return (
    <div
      className="video-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        ...size,
      }}
      ref={videoContainerRef}
    >
      <video
        loop
        ref={videoRef}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: '120%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
      </video>
    </div>
  );
}
