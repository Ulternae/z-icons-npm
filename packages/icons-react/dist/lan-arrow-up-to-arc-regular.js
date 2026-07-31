import React from 'react';

export const LanArrowUpToArcRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48c114.9 0 208 93.1 208 208 0 13.3 10.7 24 24 24s24-10.7 24-24C512 114.6 397.4 0 256 0S0 114.6 0 256c0 13.3 10.7 24 24 24s24-10.7 24-24c0-114.9 93.1-208 208-208m121 223L273 167c-9.4-9.4-24.6-9.4-33.9 0L135 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V488c0 13.3 10.7 24 24 24s24-10.7 24-24V241.9l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUpToArcRegular;
