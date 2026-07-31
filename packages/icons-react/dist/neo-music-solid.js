import React from 'react';

export const NeoMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M560 56c0-30.9-25.1-56-56-56-99.3 3.5-202.9 21.7-298 51.2-23.6 7.3-38 29.1-38 52.2v243.7c-16.7-7.5-35.8-11.1-56-11.1-30.4 0-58.3 8.1-79.2 25.4C11.4 379.2 0 404.9 0 434s11.4 54.7 32.8 72.6C53.7 523.9 81.6 532 112 532s58.3-8.1 79.2-25.4c21.4-17.9 32.8-43.5 32.8-72.6V216.2c38.3-11.8 135.6-37.7 280-48.2v123c-16.7-7.5-35.8-11.1-56-11.1-30.4 0-58.3 8.1-79.2 25.4-21.4 17.8-32.8 43.5-32.8 72.6s11.4 54.7 32.8 72.6c20.9 17.4 48.8 25.5 79.2 25.5s58.3-8.1 79.2-25.4c21.4-17.9 32.8-43.5 32.8-72.6z"})
);

export default NeoMusicSolid;
