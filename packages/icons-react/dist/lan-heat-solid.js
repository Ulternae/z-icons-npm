import React from 'react';

export const LanHeatSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 32c17.7 0 32 14.3 32 32v80c0 34.6 11.2 68.3 32 96l19.2 25.6C288.3 304.4 304 351.5 304 400v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-34.6-11.2-68.3-32-96l-19.2-25.6C159.7 239.6 144 192.5 144 144V64c0-17.7 14.3-32 32-32M32 96c17.7 0 32 14.3 32 32v32c0 34.6 11.2 68.3 32 96l19.2 25.6C144.3 320.4 160 367.5 160 416v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-34.6-11.2-68.3-32-96l-19.2-25.6C15.7 255.6 0 208.5 0 160v-32c0-17.7 14.3-32 32-32m320 32v32c0 34.6 11.2 68.3 32 96l19.2 25.6C432.3 320.4 448 367.5 448 416v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-34.6-11.2-68.3-32-96l-19.2-25.6C303.7 255.6 288 208.5 288 160v-32c0-17.7 14.3-32 32-32s32 14.3 32 32"})
);

export default LanHeatSolid;
