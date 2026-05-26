import React from 'react';

export const LanCodeCommit = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192m127-80c-7.9 63.1-61.7 112-127 112s-119.1-48.9-127-112H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h145c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112h145c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanCodeCommit;
