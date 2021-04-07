import React, { useRef, useState } from 'react';

const scale = 1.2;

export default function Video({ size, mp4, webm }) {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    const domRect = videoContainerRef.current.getBoundingClientRect();
    setPos({
      x: -Math.round((e.clientX - domRect.left) * (scale - 1)),
      y: -Math.round((e.clientY - domRect.top) * (scale - 1)),
    });
  };

  const handleMouseEnter = e => {
    if (videoRef.current) {
      videoRef.current.play();
      handleMouseMove(e);
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
        muted
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: `${scale * 100}%`,
          height: `${scale * 100}%`,
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
