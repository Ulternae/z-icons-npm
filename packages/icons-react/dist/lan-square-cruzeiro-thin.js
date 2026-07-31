import React from 'react';

export const LanSquareCruzeiroThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm105.7 160c0 63 48.5 114.7 110.3 119.6V248c0-4.4 3.6-8 8-8s8 3.6 8 8v21.7c11.7-13.3 28.9-21.7 48-21.7 4.4 0 8 3.6 8 8s-3.6 8-8 8c-26.5 0-48 21.5-48 48v63.8c29.4-1.5 56-13.6 76.1-32.6 3.2-3 8.3-2.9 11.3.3s2.9 8.3-.3 11.3c-24.3 23-57.2 37.1-93.3 37.1-75.1 0-136-60.9-136-136s60.9-136 136-136c36.1 0 69 14.1 93.3 37.1 3.2 3 3.4 8.1.3 11.3s-8.1 3.4-11.3.3c-21.5-20.3-50.5-32.7-82.4-32.7-66.3 0-120 53.7-120 120z"})
);

export default LanSquareCruzeiroThin;
