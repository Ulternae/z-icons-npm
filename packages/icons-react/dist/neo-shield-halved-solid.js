import React from 'react';

export const NeoShieldHalvedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 37.7c0-17.5-15.9-30.7-32.9-26.6-41.2 10-99.5 28.4-154.3 61.6C12.5 87.5-.1 113.8-.1 140c0 148.9 42.5 247.6 93.5 311.8 31.4 39.6 65.5 65.3 93.3 81.7 17.1 10 37.2-3.3 37.2-23.1V37.7zm56 472.7c0 19.9 20.1 33.2 37.2 23.1 27.8-16.3 61.9-42 93.3-81.7 51-64.2 93.5-162.9 93.5-311.8 0-26.2-12.5-52.6-36.9-67.3C412.3 39.5 354 21.1 312.8 11.1c-17-4.1-32.9 9.1-32.9 26.6v472.7z"})
);

export default NeoShieldHalvedSolid;
