import React from 'react';

export function LanArrowUpToArcThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16c132.5 0 240 107.5 240 240 0 4.4 3.6 8 8 8s8-3.6 8-8C512 114.6 397.4 0 256 0S0 114.6 0 256c0 4.4 3.6 8 8 8s8-3.6 8-8C16 123.5 123.5 16 256 16m125.7 266.3-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 187.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V187.3l106.3 106.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
  );
}

export default LanArrowUpToArcThin;
