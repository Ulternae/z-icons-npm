import React from 'react';

export function LanLambda({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h123.5c6.2 0 11.9 3.6 14.5 9.3l7.4 16L1.3 457.6c-3.5 8.1.2 17.5 8.3 21.1s17.5-.2 21.1-8.3l148.7-342.1 149.5 323.8c7.8 17 24.9 27.9 43.6 27.9H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-59.5c-6.2 0-11.9-3.6-14.5-9.3L183.1 59.9c-7.8-17-24.9-27.9-43.6-27.9z"})
  );
}

export default LanLambda;
