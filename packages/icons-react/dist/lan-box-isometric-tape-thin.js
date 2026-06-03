import React from 'react';

export const LanBoxIsometricTapeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -5.9 512 517.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M229.4 488c6 3.3 12.5 5.4 19.1 6.4V260.8l-213-114.1c-1.9 5.7-3 11.8-3 18v181.6c0 20.4 11.1 39.2 29 49.1l168 92.7zm54.1 0 168-92.7c17.9-9.9 29-28.6 29-49.1V164.6c0-6.2-1-12.3-3-18l-53 28.4v116.5c0 2.9-1.6 5.6-4.1 7l-80 45c-2.5 1.4-5.5 1.4-8-.1s-4-4.1-4-6.9v-110l-64 34.3v233.6c6.6-.9 13.1-3.1 19.1-6.4m125-322.4v-.8L188.7 41.1l-62.4 36.6 214.1 120.5 3.6 2 64.5-34.5zm16-8.6 45.8-24.5c-4.5-6.4-10.5-12-17.5-16.1l-168-98.5a55.88 55.88 0 0 0-56.7 0l-23.5 13.8 215.8 121.4 4.1 2.3zm-80 61v104.9l64-36V183.7zm-17.2-9-217-122.1-50.1 29.4c-7 4.1-12.9 9.6-17.5 16.1L256.5 247zm-36.1 292.9c-21.6 11.9-47.9 11.9-69.5 0l-168-92.7c-23-12.7-37.2-36.8-37.2-63V164.6c0-25.5 13.5-49.2 35.6-62.1L220.1 4c22.5-13.2 50.3-13.2 72.8 0l168 98.5c22 12.9 35.6 36.5 35.6 62.1v181.6c0 26.2-14.3 50.4-37.2 63l-168 92.7z"})
);

export default LanBoxIsometricTapeThin;
