import React from 'react';

export const LanArrowsLeftRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m465 377 104-104c9.4-9.4 9.4-24.6 0-33.9L465 135c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l63 63H82l63-63c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239c-9.4 9.4-9.4 24.6 0 33.9L111 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63H494l-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanArrowsLeftRightRegular;
