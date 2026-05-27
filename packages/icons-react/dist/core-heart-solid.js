import React from 'react';

export const CoreHeartSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M289.8 77.8c61.1-61.1 160.2-61.1 221.3 0s61.1 160.2 0 221.2L288.4 521.7 65.8 299.1C4.7 238 4.7 138.9 65.8 77.8s160.2-61.1 221.3 0l1.4 1.4 1.4-1.4z"})
);

export default CoreHeartSolid;
