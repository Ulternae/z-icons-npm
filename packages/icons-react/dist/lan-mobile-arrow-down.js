import React from 'react';

export const LanMobileArrowDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM80 0C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 416c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m131.3-188.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 249.4V128c0-8.8-7.2-16-16-16s-16 7.2-16 16v121.4l-44.7-44.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l72 72c6.2 6.2 16.4 6.2 22.6 0z"})
);

export default LanMobileArrowDown;
