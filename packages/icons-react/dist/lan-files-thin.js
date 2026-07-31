import React from 'react';

export const LanFilesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 16c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V170.5q0-5.4-1.2-10.5H344c-30.9 0-56-25.1-56-56V17.2q-5.1-1.2-10.5-1.2zm264 128c-1.8-2.7-3.8-5.1-6.1-7.4L311.4 30.1c-2.3-2.3-4.8-4.3-7.4-6.1v80c0 22.1 17.9 40 40 40zM96 64c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l106.5 106.6c12 12 18.7 28.3 18.7 45.3V384c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zM8 96c4.4 0 8 3.6 8 8v384c0 22.1 17.9 40 40 40h288c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56V104c0-4.4 3.6-8 8-8"})
);

export default LanFilesThin;
