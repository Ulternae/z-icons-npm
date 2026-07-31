import React from 'react';

export const LanBattery3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M528 112c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zM112 64c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h416c44.2 0 80-35.8 80-80v-48c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80zm64 240v-96h112v96zm-48-120v144c0 13.3 10.7 24 24 24h160c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24"})
);

export default LanBattery3Regular;
