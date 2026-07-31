import React from 'react';

export const LanClockEightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m280-136v136c0 8-4 15.5-10.7 20l-96 64c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l85.3-56.8V120c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanClockEightRegular;
