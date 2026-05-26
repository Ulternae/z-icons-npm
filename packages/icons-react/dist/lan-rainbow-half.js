import React from 'react';

export const LanRainbowHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 32C225.4 32 32 225.4 32 464c0 8.8-7.2 16-16 16s-16-7.2-16-16C0 207.7 207.7 0 464 0c8.8 0 16 7.2 16 16s-7.2 16-16 16m0 144c-159.1 0-288 128.9-288 288 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-176.7 143.3-320 320-320 8.8 0 16 7.2 16 16s-7.2 16-16 16M320 464c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176 8.8 0 16 7.2 16 16s-7.2 16-16 16c-79.5 0-144 64.5-144 144"})
);

export default LanRainbowHalf;
