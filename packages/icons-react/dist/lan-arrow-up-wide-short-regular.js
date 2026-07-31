import React from 'react';

export const LanArrowUpWideShortRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M145 39c-9.4-9.4-24.6-9.4-33.9 0L7 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm167 441h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24m0-128h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24m0-128h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24m0-128h240c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24"})
);

export default LanArrowUpWideShortRegular;
