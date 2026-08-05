import React from 'react';

export function LanCircleWonSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128.7 145.1c12.6-4 26.1 3 30.2 15.6l30.4 95.3h19.3l24.3-94c2.7-10.6 12.2-17.9 23.1-18s20.5 7.2 23.3 17.8l25.4 94.2H324l29.2-95.1c3.9-12.7 17.3-19.8 30-15.9s19.8 17.3 15.9 30L374 256h10c8.8 0 16 7.2 16 16s-7.2 16-16 16h-19.8L335 383.1c-3.1 10.2-12.7 17.1-23.4 16.9s-20-7.4-22.7-17.8L263.5 288h-13.7l-24.3 94c-2.7 10.4-11.9 17.7-22.6 18s-20.3-6.5-23.5-16.7L149 288h-21c-8.8 0-16-7.2-16-16s7.2-16 16-16h10.8l-25.7-80.7c-4-12.6 3-26.1 15.6-30.2m71.2 144.2.4-1.4h-.8zm113.7 0 .4-1.4h-.8z"})
  );
}

export default LanCircleWonSolid;
