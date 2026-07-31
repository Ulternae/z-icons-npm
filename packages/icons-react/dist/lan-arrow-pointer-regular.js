import React from 'react';

export const LanArrowPointerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M102.4 4.8c-7.3-5.5-17-6.3-25.1-2.3S64 14.9 64 24v400c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.4l96.7-129 94.6 189.3c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-94.7-189.3h161.2c10.3 0 19.5-6.6 22.8-16.4s-.1-20.6-8.4-26.8zM112 352V72l224 168H208c-7.6 0-14.7 3.6-19.2 9.6z"})
);

export default LanArrowPointerRegular;
