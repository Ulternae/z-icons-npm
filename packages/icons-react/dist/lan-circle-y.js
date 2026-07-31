import React from 'react';

export const LanCircleY = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-67.7-346.2c-5.7-6.8-15.7-7.7-22.5-2s-7.7 15.7-2 22.5l76.3 91.5V336c0 8.8 7.2 16 16 16s16-7.2 16-16v-58.2l76.3-91.5c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2L256 247z"})
);

export default LanCircleY;
