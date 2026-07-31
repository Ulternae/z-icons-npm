import React from 'react';

export const LanGrill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M408 64c4.4 0 8 3.6 8 8v24c0 106-86 192-192 192S32 202 32 96V72c0-4.4 3.6-8 8-8zM40 32C17.9 32 0 49.9 0 72v24c0 92.5 56 171.9 136 206.1l-23.7 52c-5.2-1.4-10.7-2.1-16.4-2.1-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64h168.6l24.8 54.6c3.7 8 13.1 11.6 21.2 7.9s11.6-13.1 7.9-21.2L312 302.1C392 267.9 448 188.5 448 96V72c0-22.1-17.9-40-40-40zm100.4 337.9 26.1-57.3c18.4 4.9 37.7 7.5 57.6 7.5s39.2-2.6 57.6-7.5l32.5 71.5H151.6c-3-5.2-6.8-10-11.1-14.1zM96 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanGrill;
