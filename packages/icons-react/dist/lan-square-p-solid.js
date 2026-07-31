import React from 'react';

export const LanSquarePSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm104 112h68c46.4 0 84 37.6 84 84s-37.6 84-84 84h-44v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24m68 120c19.9 0 36-16.1 36-36s-16.1-36-36-36h-44v72z"})
);

export default LanSquarePSolid;
