import React from 'react';

export const LanGridRound2MinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192m160-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0m24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanGridRound2MinusSolid;
