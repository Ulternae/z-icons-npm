import React from 'react';

export const LanFluteThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.925 576 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M449.4 9.4 163 295.7l85.3 85.3L534.6 94.6c12.5-12.5 12.5-32.8 0-45.3l-40-40c-12.5-12.5-32.8-12.5-45.3 0zM151.7 307 41.4 417.4c-12.5 12.5-12.5 32.8 0 45.3l40 40c12.5 12.5 32.8 12.5 45.3 0L237 392.3zM438.1-1.9c18.7-18.7 49.1-18.7 67.9 0l40 40c18.7 18.7 18.7 49.1 0 67.9L138 514c-18.7 18.7-49.1 18.7-67.9 0l-40-40c-18.7-18.7-18.7-49.1 0-67.9zM280 248a16 16 0 1 1 32 0 16 16 0 1 1-32 0M128 400a16 16 0 1 1 0 32 16 16 0 1 1 0-32m216-216a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanFluteThin;
