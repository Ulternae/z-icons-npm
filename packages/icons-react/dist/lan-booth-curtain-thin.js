import React from 'react';

export const LanBoothCurtainThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 48c0-17.7 14.3-32 32-32h48v360c0 35.3 28.7 64 64 64 24.1 0 45.1-13.3 56-33 10.9 19.7 31.9 33 56 33s45.1-13.3 56-33c10.9 19.7 31.9 33 56 33 19.1 0 36.3-8.4 48-21.7V504c0 4.4 3.6 8 8 8s8-3.6 8-8V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v456c0 4.4 3.6 8 8 8s8-3.6 8-8zm416 8v320c0 26.5-21.5 48-48 48s-48-21.5-48-48V16h64c17.7 0 32 14.3 32 32zm-112 8v312c0 26.5-21.5 48-48 48s-48-21.5-48-48V16h96zM112 376V16h96v360c0 26.5-21.5 48-48 48s-48-21.5-48-48"})
);

export default LanBoothCurtainThin;
