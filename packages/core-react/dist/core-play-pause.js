import React from 'react';

export function CorePlayPause({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 64H0v384h76.4l9.2-8.3 176-160c6.6-6.1 10.4-14.7 10.4-23.7s-3.8-17.6-10.5-23.7l-176-160-9.1-8.3zm160.4 192L64 372.8V139.2zM320 64v384h64V64zm128 0v384h64V64z"})
  );
}

export default CorePlayPause;
