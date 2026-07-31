import React from 'react';

export const LanOctagonCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M324.2.1c17 0 33.2 6.8 45.2 18.8l124.2 124c12 12 18.7 28.3 18.8 45.2v135.6c0 17-6.8 33.2-18.8 45.2L369.5 493.2c-12 12-28.3 18.7-45.2 18.7H188.7c-17 0-33.3-6.7-45.2-18.7L19.3 369C7.3 357 .5 340.8.5 323.8V188.2c0-17 6.8-33.3 18.7-45.2L143.4 18.8c12-12 28.3-18.7 45.2-18.8h135.6zm50.2 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.5 315.3l-52.1-52.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8l136-187c7.8-10.7 5.4-25.7-5.3-33.5z"})
);

export default LanOctagonCheckSolid;
