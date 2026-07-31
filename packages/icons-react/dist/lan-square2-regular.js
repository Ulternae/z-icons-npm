import React from 'react';

export const LanSquare2Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 49.3h62c36.5 0 66 29.6 66 66 0 27.1-16.6 51.5-41.9 61.4l-44.7 17.6c-12.9 5.1-22.1 16.3-24.6 29.6h79.3c13.3 0 24 10.7 24 24s-10.7 24-24 24h-104c-13.3 0-24-10.7-24-24v-16.4c0-36.2 22.1-68.7 55.8-81.9l44.7-17.6c6.9-2.7 11.4-9.4 11.4-16.8 0-10-8.1-18-18-18h-62c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanSquare2Regular;
