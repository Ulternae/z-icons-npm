import React from 'react';

export const LanNotes = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 384H160c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v160h-96c-35.3 0-64 28.7-64 64zm146.7-128L352 370.7V288c0-17.7 14.3-32 32-32zM96 352c0 35.3 28.7 64 64 64h165.5c17 0 33.3-6.7 45.3-18.7l122.5-122.6c12-12 18.7-28.3 18.7-45.3V64c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM16 96c-8.8 0-16 7.2-16 16v336c0 35.3 28.7 64 64 64h272c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-17.7 0-32-14.3-32-32V112c0-8.8-7.2-16-16-16m216 208a24 24 0 1 0-48 0 24 24 0 1 0 48 0M208 88a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24 120a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanNotes;
