import React from 'react';

export function LanWifi1({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 128 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 448c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24m0 32c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56 25.1 56 56 56"})
  );
}

export default LanWifi1;
