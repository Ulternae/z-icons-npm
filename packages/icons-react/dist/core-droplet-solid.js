import React from 'react';

export const CoreDropletSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M38.4 204.8C126.4 87.5 177.6 19.2 192 0c14.4 19.2 65.6 87.5 153.6 204.8C370.5 238 384 278.5 384 320c0 106-86 192-192 192S0 426 0 320c0-41.5 13.5-82 38.4-115.2"})
);

export default CoreDropletSolid;
