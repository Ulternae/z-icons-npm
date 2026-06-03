import React from 'react';

export const LanDisplayArrowDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8 512 520',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 24v170.7l25.4-25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l25.3 25.4V24c0-17.7 14.3-32 32-32s32 14.3 32 32M64 32h112v64H64v256h384V96H336V32h112c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H304l16 48h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h72l16-48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
);

export default LanDisplayArrowDownSolid;
