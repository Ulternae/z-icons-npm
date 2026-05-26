import React from 'react';

export const LanCaretCircleRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m352 0c0-9.6-4-18.7-11-25.2l-102.8-95.5c-5.1-4.7-11.8-7.3-18.7-7.3-15.2 0-27.5 12.3-27.5 27.5v201c0 15.2 12.3 27.5 27.5 27.5 6.9 0 13.6-2.6 18.7-7.3L341 281.2c7-6.5 11-15.6 11-25.2m-32.7-1.7c.5.4.7 1.1.7 1.7s-.3 1.3-.7 1.7L224 346.1V165.8l95.3 88.4z"})
);

export default LanCaretCircleRight;
