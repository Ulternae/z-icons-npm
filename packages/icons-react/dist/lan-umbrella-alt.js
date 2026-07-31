import React from 'react';

export const LanUmbrellaAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272.2-16c0-8.8-7.2-16-16-16s-16 7.2-16 16V.5C117 8.1 17.3 103 2.2 224.1 0 241.6 14.6 256 32.2 256h448c17.7 0 32.2-14.4 30-31.9C495.1 103 395.5 8.1 272.2.5zM478 224H34.5C50 115.5 143.4 32 256.2 32S462.5 115.5 478 224m-205.8 80h-32v144.4c0 17.5-14.2 31.6-31.6 31.6-15.5 0-28.7-11.2-31.2-26.4l-1.4-8.2c-1.5-8.7-9.7-14.6-18.4-13.2s-14.6 9.7-13.2 18.4l1.4 8.2c5.1 30.7 31.7 53.2 62.8 53.2 35.1 0 63.6-28.5 63.6-63.6z"})
);

export default LanUmbrellaAlt;
