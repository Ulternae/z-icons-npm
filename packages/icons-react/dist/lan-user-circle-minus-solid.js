import React from 'react';

export const LanUserCircleMinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240m-29.7 296h59.4c3.9 0 7.9.1 11.8.4-16.2 28.2-25.5 60.8-25.5 95.6 0 41.8 13.4 80.5 36 112H45.7C29.3 512 16 498.7 16 482.3 16 383.8 95.8 304 194.3 304m93.7 96a144 144 0 1 1 288 0 144 144 0 1 1-288 0m224 0c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"})
);

export default LanUserCircleMinusSolid;
