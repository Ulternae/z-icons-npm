import React from 'react';

export const LanXmarkLargeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M2.3 13.7c-3.1-3.2-3.1-8.2 0-11.4s8.2-3.1 11.3 0L256 244.7 498.3 2.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L267.3 256l242.4 242.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L256 267.3 13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L244.7 256z"})
);

export default LanXmarkLargeThin;
