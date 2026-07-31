import React from 'react';

export const LanCommentMiddleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m230.9 418.5 25.1 50.1 25.1-50.1c6.3-12.7 17.9-21.9 31.7-25.2C404.2 371.3 464 300.5 464 224c0-91.4-86.9-176-208-176S48 132.6 48 224c0 76.5 59.8 147.4 151.2 169.3 13.8 3.3 25.4 12.5 31.7 25.2M324 440l-44.8 89.7c-4.4 8.8-13.4 14.3-23.2 14.3s-18.8-5.5-23.2-14.3L188 440C79.6 414 0 327.1 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 103.1-79.6 190-188 216"})
);

export default LanCommentMiddleRegular;
