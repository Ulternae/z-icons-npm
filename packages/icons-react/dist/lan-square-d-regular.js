import React from 'react';

export const LanSquareDRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 48h72c61.9 0 112 50.1 112 112s-50.1 112-112 112h-72c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24m24 176h48c35.3 0 64-28.7 64-64s-28.7-64-64-64h-48z"})
);

export default LanSquareDRegular;
