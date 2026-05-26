import React from 'react';

export const LanArrowLeftToLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24S0 437.3 0 424zm135 185c-9.4-9.4-9.4-24.6 0-33.9L271 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-95 95H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H209.9l95 95c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"})
);

export default LanArrowLeftToLineRegular;
