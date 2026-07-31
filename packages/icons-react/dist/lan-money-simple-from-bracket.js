import React from 'react';

export const LanMoneySimpleFromBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 32c-26.5 0-48 21.5-48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80C0 35.8 35.8 0 80 0h416c44.2 0 80 35.8 80 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.5-21.5-48-48-48zm368 416V96h32v352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96h32v352c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32M288 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanMoneySimpleFromBracket;
