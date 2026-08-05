import React from 'react';

export function LanArrowUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M197.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l162.3 162.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176z"})
  );
}

export default LanArrowUpThin;
