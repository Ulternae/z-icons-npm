import React from 'react';

export const LanDisplayChartUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96v256h384V96zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H304l16 48h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h72l16-48H64c-35.3 0-64-28.7-64-64zm312 48h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-22.1l-71 71c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-63-63-63 63c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l63 63 54.1-54.1H312c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanDisplayChartUpSolid;
