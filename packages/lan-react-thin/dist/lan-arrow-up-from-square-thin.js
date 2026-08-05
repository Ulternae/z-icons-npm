import React from 'react';

export function LanArrowUpFromSquareThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.025 448 544.025',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m232-4.7 74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216-4.7V312c0 4.4 3.6 8 8 8s8-3.6 8-8zM16 192c0-26.5 21.5-48 48-48h56c4.4 0 8-3.6 8-8s-3.6-8-8-8H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanArrowUpFromSquareThin;
