import React from 'react';

export const LanFileZipper = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192h-96c-35.3 0-64-28.7-64-64zm146.7 128L224 45.3V128c0 17.7 14.3 32 32 32zM0 64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 16c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m32 80v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48zm0-32h32c17.7 0 32 14.3 32 32v48c0 26.5-21.5 48-48 48s-48-21.5-48-48v-48c0-17.7 14.3-32 32-32"})
);

export default LanFileZipper;
