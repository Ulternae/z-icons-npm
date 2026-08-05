import React from 'react';

export function LanMobileSignalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 64C32 28.7 60.7 0 96 0h224c35.3 0 64 28.7 64 64v231.3c-58.2 43.5-98.9 109.3-109.3 184.7-1.5 10.5-2.3 21.2-2.6 32H96c-35.3 0-64-28.7-64-64zm208.5 352H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h60.6c2.8-16.5 6.8-32.5 11.9-48M576 312c0 13.3-10.7 24-24 24-101.6 0-184 82.4-184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1 103.9-232 232-232 13.3 0 24 10.7 24 24m0 200a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-24-128c13.3 0 24 10.7 24 24s-10.7 24-24 24c-48.6 0-88 39.4-88 88 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1 60.9-136 136-136"})
  );
}

export default LanMobileSignalSolid;
