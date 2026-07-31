import React from 'react';

export const CorePlayPauseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64h76.4l9.2 8.3 176 160c6.6 6.1 10.4 14.7 10.4 23.7s-3.8 17.6-10.5 23.7l-176 160-9.2 8.3H-.1V64zm384 0v384h-64V64zm128 0v384h-64V64z"})
);

export default CorePlayPauseSolid;
