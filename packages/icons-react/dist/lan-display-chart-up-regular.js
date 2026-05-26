import React from 'react';

export const LanDisplayChartUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 80c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h115.7l-8 48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-51.7l-8-48H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm156.3 432 8-48h55.3l8 48zM328 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h22.1L272 254.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0L87 279c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71 63 63c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l95-95V232c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-80z"})
);

export default LanDisplayChartUpRegular;
