import React from 'react';

export const NeoHeartSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 87.2C308.8 47 357.4 28 406 28c44.5 0 83.6 14.3 111.7 42.3S560 137.5 560 182c0 82.1-40.3 154.4-85.3 209.9-45.3 55.8-97.7 97.5-127.2 119-20.2 14.7-44 21.1-67.4 21.1s-47.2-6.5-67.4-21.1c-29.7-21.5-82.1-63.2-127.4-119C40.3 336.4 0 264.1 0 182c0-44.5 14.3-83.6 42.3-111.7S109.5 28 154 28c48.6 0 97.2 19 126 59.2"})
);

export default NeoHeartSolid;
