import React from 'react';

export const LanCardsBlankSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448.2 64c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-192c-14.6 0-28-5-38.8-13.2l137.9-36.9c59.7-16 95.2-77.4 79.2-137.2L364.6 64zM226.9-17.2C261-26.4 296.1-6.1 305.3 28l82.8 309.1c9.1 34.1-11.1 69.2-45.2 78.4l-185.5 49.7c-34.1 9.2-69.2-11.1-78.4-45.2L-3.8 110.9C-13 76.7 7.3 41.6 41.4 32.5z"})
);

export default LanCardsBlankSolid;
