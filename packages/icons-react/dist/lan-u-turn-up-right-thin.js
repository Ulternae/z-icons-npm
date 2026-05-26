import React from 'react';

export const LanUTurnUpRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 128c0-8.1-3.6-16.8-9.3-22.6l-112-112c-20.8-20.8-52.7-4-54.6 22.6v48h-128C93.1 64 0 157.1 0 272s93.1 208 208 208h208c17.4-.8 32-13.9 32-32v-64c-.8-17.4-13.9-32-32-32H208c-44.2 0-80-35.8-80-80s35.8-80 80-80h128v48c0 12.9 7.8 24.6 19.7 29.6 11.9 4.9 25.7 2.2 34.9-6.9l112-112c5.8-5.8 9.4-14.6 9.3-22.6zm-16 0c0 4.1-1.6 7.5-5.1 11.7L379.3 251.3c-10 10-27.3 2.8-27.3-11.3v-56c0-4.4-3.6-8-8-8H208c-53 0-96 43-96 96s43 96 96 96h208c9.4 0 15.2 7.4 16 16v64c0 9.4-7.4 15.2-16 16H208c-106 0-192-86-192-192S102 80 208 80h136c4.2 0 8-3.8 8-8V16c1-13.3 16.9-21.7 27.3-11.3L491 116.4c2.9 3.6 4.5 7.1 5 11.6"})
);

export default LanUTurnUpRightThin;
