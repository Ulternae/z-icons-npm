import React from 'react';

export const LanArrowLeftArrowRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M145 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-34-.1L7 111c-9.4 9.4-9.4 24.6 0 33.9L111 249c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9l63-63zm222 256 63 63H23.9c-13.3 0-24 10.7-24 24s10.7 24 24 24H430l-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 401c9.4-9.4 9.4-24.6 0-33.9L401 263c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
);

export default LanArrowLeftArrowRightRegular;
