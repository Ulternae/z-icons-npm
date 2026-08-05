import React from 'react';

export function LanSquareCurrencyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm114.3 50.3c3.1-3.1 8.2-3.1 11.3 0l36.4 36.4c16.7-14.2 38.4-22.7 62-22.7s45.3 8.5 62 22.7l36.4-36.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L297.3 194c14.2 16.7 22.7 38.4 22.7 62s-8.5 45.3-22.7 62l36.4 36.4c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L286 329.3c-16.7 14.2-38.4 22.7-62 22.7s-45.3-8.5-62-22.7l-36.4 36.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l36.4-36.4c-14.2-16.7-22.7-38.4-22.7-62s8.5-45.3 22.7-62l-36.4-36.4c-3.1-3.1-3.1-8.2 0-11.3M224 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
  );
}

export default LanSquareCurrencyThin;
