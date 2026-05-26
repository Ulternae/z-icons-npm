import React from 'react';

export const LanFileDashedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 0c-35.3 0-64 28.7-64 64v176h384v-69.5c0-17-6.7-33.3-18.7-45.3L354.7 18.7C342.7 6.7 326.5 0 309.5 0zM96 448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-64H96zm325.5-272H328c-13.3 0-24-10.7-24-24V58.5zM24 288c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm208 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm208 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanFileDashedLineSolid;
