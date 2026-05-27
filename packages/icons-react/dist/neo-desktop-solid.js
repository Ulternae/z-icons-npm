import React from 'react';

export const NeoDesktopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7.4 315.2c-9.8-45.4-9.8-137 0-182.4 5.5-25.6 15.2-47.8 32.5-65.1s39.5-27 65.1-32.5c25.3-5.5 55.7-7.2 91.2-7.2h168c35.6 0 65.9 1.7 91.2 7.2 25.6 5.5 47.8 15.2 65.1 32.5s27 39.5 32.5 65.1c9.8 45.4 9.8 137 0 182.4-5.5 25.6-15.2 47.8-32.5 65.1s-39.5 27-65.1 32.5c-25.3 5.5-55.7 7.2-91.2 7.2h-168c-35.6 0-65.9-1.7-91.2-7.2-25.6-5.5-47.8-15.2-65.1-32.5s-27-39.5-32.5-65.1M308.2 490c0-15.5-12.5-28-28-28s-28 12.5-28 28v14h-84c-15.5 0-28 12.5-28 28s12.5 28 28 28h224c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z"})
);

export default NeoDesktopSolid;
