import React from 'react';

export const LanCirclePeruvianSolesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m118.6-391.1c-12.7-3.6-26 3.7-29.7 16.5l-64 224c-3.6 12.7 3.7 26 16.5 29.7s26-3.7 29.7-16.5l64-224c3.6-12.7-3.7-26-16.5-29.7m-183 31.1c-35.1 0-63.6 28.5-63.6 63.6 0 30.3 21.4 56.4 51.1 62.3l16.4 3.3c7.3 1.5 12.5 7.8 12.5 15.3 0 8.6-7 15.6-15.6 15.6L160 312c-13.3 0-24 10.7-24 24s10.7 24 24 24h32.4c35.1 0 63.6-28.5 63.6-63.6 0-30.3-21.4-56.4-51.1-62.3l-16.4-3.3c-7.3-1.5-12.5-7.8-12.5-15.2 0-8.6 7-15.6 15.6-15.6H216c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCirclePeruvianSolesSolid;
