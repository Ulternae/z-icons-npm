import React from 'react';

export const LanArrowDownArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M297.5 145c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L367.5 7c9.4-9.4 24.6-9.4 33.9 0l104 104c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-63-63V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-63 63zm-256 222 63 63V23.9c0-13.3 10.7-24 24-24s24 10.7 24 24V430l63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-104 104c-9.4 9.4-24.6 9.4-33.9 0L7.5 401c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"})
);

export default LanArrowDownArrowUpRegular;
