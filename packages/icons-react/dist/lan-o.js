import React from 'react';

export const LanO = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 64a192 192 0 1 0 0 384 192 192 0 1 0 0-384m224 192a224 224 0 1 1-448 0 224 224 0 1 1 448 0"})
);

export default LanO;
