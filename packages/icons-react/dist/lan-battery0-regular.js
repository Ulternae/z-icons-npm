import React from 'react';

export const LanBattery0Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 112c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80h416c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v48c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80z"})
);

export default LanBattery0Regular;
