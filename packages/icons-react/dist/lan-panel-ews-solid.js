import React from 'react';

export const LanPanelEwsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v256h64c22.1 0 40-17.9 40-40v-56h-8c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-8v56c0 48.6-39.4 88-88 88H0v16c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm216 64h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m8 96h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"})
);

export default LanPanelEwsSolid;
