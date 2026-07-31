import React from 'react';

export const LanArrowRightLongToLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M640 120v272c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24M505 239c9.4 9.4 9.4 24.6 0 33.9L369 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l95-95H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h406.1l-95-95c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"})
);

export default LanArrowRightLongToLineRegular;
