import React from 'react';

export const CoreAlarmClock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M319.7 512a256 256 0 1 1 .5-512 256 256 0 1 1-.5 512m.5-448a192 192 0 1 0-.5 384 192 192 0 1 0 .5-384m28 164h96v56h-124c-15.5 0-28-12.5-28-28V116h56zM173.5 0 64.3 109.2 19 64 128.3-45.2zm448 64-45.2 45.2L467 0l45.3-45.2z"})
);

export default CoreAlarmClock;
