import React from 'react';

export const LanFileMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h149.5c17 0 33.3 6.7 45.3 18.7l106.5 106.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208-5.5V152c0 13.3 10.7 24 24 24h93.5zM248 240h-48c-13.3 0-24 10.7-24 24v89.8c-5.1-1.2-10.5-1.8-16-1.8-35.3 0-64 25.1-64 56s28.7 56 64 56 64-25.1 64-56V304h24c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24"})
);

export default LanFileMusicSolid;
