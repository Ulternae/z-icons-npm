import React from 'react';

export const LanBoxIsometricThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M229.4 488c6 3.3 12.5 5.5 19.1 6.4V260.8l-213-114.1c-1.9 5.7-3 11.8-3 18v181.6c0 20.4 11.1 39.2 29 49.1l168 92.7zm54.1 0 168-92.7c17.9-9.9 29-28.6 29-49.1V164.6c0-6.2-1-12.3-3-18L264.4 260.8v233.6c6.6-1 13.1-3.1 19.1-6.4m95.6-306.7 91.2-48.8c-4.5-6.4-10.5-12-17.5-16.1l-168-98.5a55.88 55.88 0 0 0-56.7 0l-68.3 40zm-16.7 8.9-218.5-123-83.8 49.1c-7 4.1-12.9 9.6-17.5 16.1l213.8 114.5 106-56.8zm-71.2 311.7c-21.6 11.9-47.9 11.9-69.5 0l-168-92.7c-23-12.7-37.2-36.8-37.2-63V164.6c0-25.5 13.5-49.2 35.6-62.1L220.1 4c22.5-13.2 50.3-13.2 72.8 0l168 98.5c22 12.9 35.6 36.5 35.6 62.1v181.6c0 26.2-14.3 50.4-37.2 63l-168 92.7z"})
);

export default LanBoxIsometricThin;
