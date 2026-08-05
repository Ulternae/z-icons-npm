import React from 'react';

export function LanTriangleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256.5 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.6 480 472.5 480h-432c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 17.6c-7.2 0-13.9 3.5-18.1 9.2l-1.7 2.6-216 400c-3.7 6.9-3.6 15.4.5 22.1l1.7 2.4c4.2 5.3 10.7 8.5 17.6 8.5h432c7.9 0 15.2-4.2 19.3-10.9l1.3-2.6c2.3-5.3 2.4-11.4.4-16.8l-1.2-2.7-216-400c-3.9-7.2-11.5-11.7-19.7-11.8z"})
  );
}

export default LanTriangleThin;
