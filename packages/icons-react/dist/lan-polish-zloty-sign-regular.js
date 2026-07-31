import React from 'react';

export const LanPolishZlotySignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 32c13.3 0 24 10.7 24 24v141.4l31.6-11.8c12.4-4.7 26.2 1.6 30.9 14s-1.6 26.2-14 30.9L376 248.6V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V266.6l-31.6 11.8c-12.4 4.7-26.2-1.6-30.9-14s1.6-26.2 14-30.9l48.5-18.1V56c0-13.3 10.7-24 24-24M24 192h176c9 0 17.3 5.1 21.4 13.2s3.3 17.7-2.1 25L71.4 432H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-9 0-17.3-5.1-21.4-13.2s-3.3-17.7 2.1-25L152.6 240H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanPolishZlotySignRegular;
