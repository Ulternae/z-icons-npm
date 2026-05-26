import React from 'react';

export const LanBattery0 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm464 240v32c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80v32h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32zm0-128v96h32v-96z"})
);

export default LanBattery0;
