import React from 'react';

export function LanOliveSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 480C71.6 480 0 408.4 0 320 0 128 181.9 32 280 32c76.5 0 168 91.5 168 168 0 98.1-96 280-288 280m127.1-287.1c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8-69.6-40.1-87.8-21.9-8.4 57.5 21.9 87.8"})
  );
}

export default LanOliveSolid;
