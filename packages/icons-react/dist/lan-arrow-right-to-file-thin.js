import React from 'react';

export const LanArrowRightToFileThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M261.5 16H128c-26.5 0-48 21.5-48 48v208H64V64c0-35.3 28.7-64 64-64h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64v-48h16v48c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V186.5q0-5.4-1.2-10.5H328c-30.9 0-56-25.1-56-56V17.2q-5.1-1.2-10.5-1.2m156.4 136.6L295.4 30.1c-2.3-2.3-4.8-4.3-7.4-6.1v96c0 22.1 17.9 40 40 40h96c-1.8-2.7-3.8-5.1-6.1-7.4M0 336c0-4.4 3.6-8 8-8h284.7l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.3-58.4H8c-4.4 0-8-3.6-8-8"})
);

export default LanArrowRightToFileThin;
