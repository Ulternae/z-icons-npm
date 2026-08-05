import React from 'react';

export function LanCircleGSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-256c0 39.8 32.2 72 72 72 28.3 0 52.7-16.3 64.5-40H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h71.7c6.7 0 13.1 2.8 17.7 7.7s6.8 11.5 6.3 18.2c-5.1 61.6-56.7 110-119.6 110-66.3 0-120-53.7-120-120s53.7-120 120-120c30.7 0 58.8 11.6 80 30.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9c-12.8-11.4-29.5-18.3-48-18.3-39.8 0-72 32.2-72 72z"})
  );
}

export default LanCircleGSolid;
