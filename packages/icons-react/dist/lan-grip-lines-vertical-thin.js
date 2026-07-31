import React from 'react';

export const LanGripLinesVerticalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m144 0c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8"})
);

export default LanGripLinesVerticalThin;
