import React from 'react';

export const CoreAlarmClockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 557.2',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M319.7 512a256 256 0 1 1 .5-512 256 256 0 1 1-.5 512m-23.4-256c0 13.3 10.7 24 24 24h136v-48h-112V104h-48zM173.5 0 64.3 109.2 19 64 128.3-45.2zm448 64-45.2 45.2L467 0l45.3-45.2z"})
);

export default CoreAlarmClockSolid;
