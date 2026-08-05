import React from 'react';

export function LanImageLandscapeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 64a40 40 0 1 0-80 0 40 40 0 1 0 80 0m180 10.7c-4.5-6.7-12-10.7-20-10.7s-15.5 4-20 10.7l-56 84-17.3-21.6c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S142.8 384 152 384h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6z"})
  );
}

export default LanImageLandscapeSolid;
