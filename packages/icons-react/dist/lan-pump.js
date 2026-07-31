import React from 'react';

export const LanPump = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v192H32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h272v-32H32v-96h128V32h96v224h48v-32h-16V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm464 128c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zM416 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm32 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanPump;
