import React from 'react';

export const LanValueAbsoluteThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 72v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m496 0v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m-381.7 58.3c3.1-3.1 8.2-3.1 11.3 0L256 244.7l114.3-114.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L267.3 256l114.4 114.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L256 267.3 141.7 381.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L244.7 256 130.3 141.7c-3.1-3.1-3.1-8.2 0-11.3z"})
);

export default LanValueAbsoluteThin;
