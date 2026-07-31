import React from 'react';

export const LanWirelessSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 208c132.5 0 240 107.5 240 240 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-97.2-78.8-176-176-176-17.7 0-32-14.3-32-32s14.3-32 32-32m0-176c229.7 0 416 186.3 416 416 0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96 14.3 96 0 81.7 0 64s14.3-32 32-32m50 433.9A48 48 0 1 1 14.1 398 48 48 0 1 1 82 465.9"})
);

export default LanWirelessSolid;
