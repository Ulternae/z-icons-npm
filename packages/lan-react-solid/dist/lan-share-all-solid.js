import React from 'react';

export function LanShareAllSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M243.8 18.4C231.8 23.4 224 35 224 48v80h-48C78.8 128 0 206.8 0 304c0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96h32v80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9zm126.7 4.7c-9.4 9.4-9.4 24.6 0 33.9l150.9 151-151 150.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L566 231.2c6.4-6 10-14.4 10-23.2s-3.6-17.2-10-23.2L404.4 23.1c-9.4-9.4-24.6-9.4-33.9 0"})
  );
}

export default LanShareAllSolid;
