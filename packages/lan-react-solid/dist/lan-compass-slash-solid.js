import React from 'react';

export function LanCompassSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-83.8-83.8C521.9 375 544 318.1 544 256 544 114.6 429.4 0 288 0c-62.1 0-119 22.1-163.3 58.8zm207.4 207.5 133.2-51.2c19.4-7.5 38.5 11.6 31 31l-51.2 133.2zm-85.1 167 32.3-84.1L63.2 133.1c-20 36.5-31.3 78.3-31.3 122.8 0 141.4 114.6 256 256 256 44.5 0 86.4-11.4 122.8-31.3L278.3 348.2l-84.1 32.3c-19.4 7.5-38.5-11.6-31-31z"})
  );
}

export default LanCompassSlashSolid;
