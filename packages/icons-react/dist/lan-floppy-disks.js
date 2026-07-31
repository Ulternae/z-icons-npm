import React from 'react';

export const LanFloppyDisks = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 64v288c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V144.6c0-8.5-3.4-16.6-9.4-22.6l-80.5-80.6c-1.8-1.8-3.9-3.4-6.1-4.7V96c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V32h-32c-17.7 0-32 14.3-32 32m224 32V32H224v64zM96 64c0-35.3 28.7-64 64-64h207.4c17 0 33.3 6.7 45.3 18.7l80.6 80.6c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-64 48v336c0 17.7 14.3 32 32 32h336c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64V112c0-8.8 7.2-16 16-16s16 7.2 16 16m304 144a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanFloppyDisks;
