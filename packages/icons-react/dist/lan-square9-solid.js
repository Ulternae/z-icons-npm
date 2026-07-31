import React from 'react';

export const LanSquare9Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm104 312c0-13.3 10.7-24 24-24h48c13.3 0 24-10.7 24-24v-12.1c-7.5 2.7-15.6 4.1-24 4.1h-32c-39.8 0-72-32.2-72-72s32.2-72 72-72h32c39.8 0 72 32.2 72 72v80c0 39.8-32.2 72-72 72h-48c-13.3 0-24-10.7-24-24m72-152h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24"})
);

export default LanSquare9Solid;
