import React from 'react';

export const LanCircleMill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m70.5-414.6c-8.1-3.6-17.5 0-21.1 8.1l-26.5 59.6c-8.8 3.8-16.6 9.5-22.9 16.5-11.7-13.3-28.9-21.7-48-21.7-12.2 0-23.7 3.4-33.4 9.4-2.5-5.5-8.1-9.4-14.6-9.4-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-112c0-17.7 14.3-32 32-32 17.5 0 31.8 14.1 32 31.6v29l-62.6 140.9c-3.6 8.1 0 17.5 8.1 21.1s17.5 0 21.1-8.1l33.4-75.1v4.6c0 8.8 7.2 16 16 16s16-7.2 16-16v-76.6l29.9-67.3c.7 0 1.4-.1 2.1-.1 17.7 0 32 14.3 32 32v112c0 8.8 7.2 16 16 16s16-7.2 16-16v-112c0-31.3-22.5-57.4-52.3-62.9l18.9-42.6c3.6-8.1 0-17.5-8.1-21.1z"})
);

export default LanCircleMill;
