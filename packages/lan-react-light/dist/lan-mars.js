import React from 'react';

export function LanMars({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L288.7 168.7C258.1 143.3 218.8 128 176 128 78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L416 86.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zM32 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0"})
  );
}

export default LanMars;
