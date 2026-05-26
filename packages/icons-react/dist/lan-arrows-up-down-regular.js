import React from 'react';

export const LanArrowsUpDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m7.5 433 104 104c9.4 9.4 24.6 9.4 33.9 0l104-104c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63V50l63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L145.5-25c-9.4-9.4-24.6-9.4-33.9 0L7.5 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V462l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
);

export default LanArrowsUpDownRegular;
