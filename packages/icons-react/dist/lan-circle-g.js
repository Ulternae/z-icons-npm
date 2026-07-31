import React from 'react';

export const LanCircleG = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-256c0-39.8 32.2-72 72-72 18.5 0 35.2 6.9 48 18.3 6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6c-18.4-16.5-42.7-26.5-69.3-26.5-57.4 0-104 46.6-104 104s46.6 104 104 104 104-46.6 104-104c0-8.8-7.2-16-16-16h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h54.2c-7.3 32.1-36 56-70.2 56-39.8 0-72-32.2-72-72z"})
);

export default LanCircleG;
