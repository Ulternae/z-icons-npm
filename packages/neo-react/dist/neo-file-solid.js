import React from 'react';

export function NeoFileSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 .4c15.5-.5 28 12.1 28 27.6v154c0 38.7 31.3 70 70 70h154c15.5 0 28 12.5 28 28v84c0 35.6-1.7 65.9-7.2 91.2-5.5 25.6-15.2 47.8-32.5 65.1s-39.5 27-65.1 32.5c-25.3 5.5-55.7 7.2-91.2 7.2h-56c-35.6 0-65.9-1.7-91.2-7.2-25.6-5.5-47.8-15.2-65.1-32.5s-27-39.5-32.5-65.1C1.7 429.9 0 399.6 0 364V196c0-35.6 1.7-65.9 7.2-91.2C12.7 79.2 22.4 57 39.7 39.7s39.5-27 65.1-32.5c18.4-4 39.4-6 63.2-6.8m114.2 9c-15.1-7.2-30.2 6.2-30.2 23V182c0 7.7 6.3 14 14 14h149.6c16.8 0 30.2-15.1 22.9-30.2-15.8-32.8-43.3-62.2-68.7-87.6S315 25.3 282.2 9.5z"})
  );
}

export default NeoFileSolid;
