import React from 'react';

export const LanCircle7Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-352c-4.4 0-8 3.6-8 8s3.6 8 8 8h112.9L201.4 339.5c-2.5 3.6-1.5 8.6 2.1 11.1s8.6 1.5 11.1-2.1l120-176c1.7-2.4 1.8-5.6.5-8.2S331 160 328 160z"})
);

export default LanCircle7Thin;
