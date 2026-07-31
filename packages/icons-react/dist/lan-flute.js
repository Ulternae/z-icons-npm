import React from 'react';

export const LanFlute = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.925 576 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M460.7 20.7 180 301.4l62.6 62.6L523.3 83.3c6.2-6.2 6.2-16.4 0-22.6l-40-40c-6.2-6.2-16.4-6.2-22.6 0M157.4 324 52.7 428.7c-6.2 6.2-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0L220 386.6zM438.1-1.9c18.7-18.7 49.1-18.7 67.9 0l40 40c18.7 18.7 18.7 49.1 0 67.9L138 514c-18.7 18.7-49.1 18.7-67.9 0l-40-40c-18.7-18.7-18.7-49.1 0-67.9zM280 248a16 16 0 1 1 32 0 16 16 0 1 1-32 0M128 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32m216-216a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanFlute;
