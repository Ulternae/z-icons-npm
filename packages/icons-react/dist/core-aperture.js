import React from 'react';

export const CoreAperture = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M107.2 134.6 145 200l31.1-53.8.2-.3L221.9 67c-45.9 8.3-86.2 32.9-114.5 67.6zm-32 56.6C68 211.4 64 233.3 64 256c0 23.9 4.4 46.9 12.4 68h75.5L121 270.6c-.2-.3-.4-.7-.6-1.1zm149.6 254.3 37.8-65.5H109.3c28.9 34.1 69.4 58 115.4 65.5zm64.9-.4c46-8.2 86.3-32.7 114.8-67.4L366.6 312l-31 53.7-.2.4-45.6 78.9zm5.3-121.2 39.2-67.9-39.2-67.9h-78.5L177.3 256l39.2 68H295zm96.1-81.4 45.5 78.7c7.4-20.4 11.4-42.4 11.4-65.3 0-23.9-4.4-46.8-12.4-67.9h-76l30.8 53.3c.2.4.5.8.7 1.2m-80.5-110.4h92C373.7 97.8 333 73.9 286.8 66.5l-37.9 65.6h61.8zM512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0"})
);

export default CoreAperture;
