import React from 'react';

export const LanPlayFlip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M396.4 37.6C408.5 44.8 416 57.9 416 72v368c0 14.1-7.5 27.2-19.6 34.4s-27.2 7.5-39.6.7l-336-184C8 284.1 0 270.6 0 256s8-28.1 20.8-35.1l336-184c12.4-6.8 27.4-6.5 39.6.7M372.2 65l-336 184c-2.6 1.4-4.2 4.1-4.2 7s1.6 5.6 4.2 7l336 184c2.5 1.4 5.5 1.3 7.9-.1s3.9-4.1 3.9-6.9V72c0-2.8-1.5-5.4-3.9-6.9s-5.4-1.5-7.9-.1"})
);

export default LanPlayFlip;
