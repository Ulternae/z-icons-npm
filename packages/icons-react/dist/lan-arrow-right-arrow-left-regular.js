import React from 'react';

export const LanArrowRightArrowLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m367 41 63 63H23.9c-13.3 0-24 10.7-24 24s10.7 24 24 24H430l-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 145c9.4-9.4 9.4-24.6 0-33.9L401 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zM145 297c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 367c-9.4 9.4-9.4 24.6 0 33.9L111 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9l63-63z"})
);

export default LanArrowRightArrowLeftRegular;
