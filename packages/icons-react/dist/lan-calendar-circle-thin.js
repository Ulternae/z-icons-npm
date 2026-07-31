import React from 'react';

export const LanCalendarCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m200-144c4.4 0 8 3.6 8 8v24h96v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h16c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h16v-24c0-4.4 3.6-8 8-8m168 80c0-17.7-14.3-32-32-32H176c-17.7 0-32 14.3-32 32v32h224zM144 336c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96H144z"})
);

export default LanCalendarCircleThin;
