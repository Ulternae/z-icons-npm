import React from 'react';

export const LanSunglassesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M143.3 96c-14 0-26.5 9.2-30.6 22.6L70.4 256H224c17.7 0 32 14.3 32 32h64c0-17.7 14.3-32 32-32h153.6l-42.3-137.4c-4.1-13.4-16.5-22.6-30.6-22.6H400c-17.7 0-32-14.3-32-32s14.3-32 32-32h32.7c42.1 0 79.4 27.5 91.8 67.8l45.4 147.5c4.1 13.2 6.1 26.9 6.1 40.7v96c0 53-43 96-96 96h-64c-53 0-96-43-96-96v-32h-64v32c0 53-43 96-96 96H96c-53 0-96-43-96-96v-96c0-13.8 2.1-27.5 6.1-40.7L51.5 99.8C63.9 59.5 101.1 32 143.3 32H176c17.7 0 32 14.3 32 32s-14.3 32-32 32zM64 320v64c0 9.5 4.2 18.1 10.8 23.9L192 320zm448 0H384v64c0 9.5 4.2 18.1 10.8 23.9z"})
);

export default LanSunglassesSolid;
