import React from 'react';

export const LanMobileNotch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 32v40c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V32h48c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zm0-32H80C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 32h64v32h-64zm-16 384c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16"})
);

export default LanMobileNotch;
