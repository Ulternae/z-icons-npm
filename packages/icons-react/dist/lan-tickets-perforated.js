import React from 'react';

export const LanTicketsPerforated = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-38.7c-28.2-12.3-48-40.5-48-73.3s19.8-61 48-73.3V96c0-17.7-14.3-32-32-32zM96 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v48c0 8.8-7.4 15.7-15.7 18.6C573.5 169.1 560 187 560 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v48c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-80 32c8.8 0 16 7.2 16 16v280c0 13.3 10.7 24 24 24h440c8.8 0 16 7.2 16 16s-7.2 16-16 16H56c-30.9 0-56-25.1-56-56V144c0-8.8 7.2-16 16-16m432 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-56a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanTicketsPerforated;
