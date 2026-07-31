import React from 'react';

export const LanSquareDSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 112h72c61.9 0 112 50.1 112 112s-50.1 112-112 112h-72c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24m24 176h48c35.3 0 64-28.7 64-64s-28.7-64-64-64h-48z"})
);

export default LanSquareDSolid;
