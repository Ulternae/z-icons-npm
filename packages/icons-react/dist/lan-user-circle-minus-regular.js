import React from 'react';

export const LanUserCircleMinusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M48 480v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-97.2 78.8-176 176-176h89.7c-8.6 14.9-15.3 31-19.6 48h-70c-70.7 0-128 57.3-128 128zm240-80a144 144 0 1 1 288 0 144 144 0 1 1-288 0m224 0c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"})
);

export default LanUserCircleMinusRegular;
