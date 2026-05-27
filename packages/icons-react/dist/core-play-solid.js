import React from 'react';

export const CorePlaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32H0v448h54.3c12.6 0 25-3.7 35.5-10.7l280-186.7c8.9-5.9 14.2-15.9 14.2-26.6s-5.3-20.7-14.2-26.6L89.8 42.7C79.3 35.7 66.9 32 54.3 32z"})
);

export default CorePlaySolid;
