import React from 'react';

export const LanCaretCircleRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m352 0c0-7.3-3-14.3-8.4-19.3L234.4 134.8c-4.7-4.4-10.8-6.8-17.2-6.8-13.9 0-25.2 11.3-25.2 25.2v205.6c0 13.9 11.3 25.2 25.2 25.2 6.4 0 12.5-2.4 17.2-6.8l109.2-101.9c5.4-5 8.4-12 8.4-19.3m-19.3-7.6c2.1 2 3.3 4.7 3.3 7.6s-1.2 5.6-3.3 7.6L223.5 365.5c-1.7 1.6-4 2.5-6.3 2.5-5.1 0-9.2-4.1-9.2-9.2V153.2c0-5.1 4.1-9.2 9.2-9.2 2.3 0 4.6.9 6.3 2.5z"})
);

export default LanCaretCircleRightThin;
