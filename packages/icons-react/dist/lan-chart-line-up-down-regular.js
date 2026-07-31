import React from 'react';

export const LanChartLineUpDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 32c13.3 0 24 10.7 24 24v344c0 17.7 14.3 32 32 32h408c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80V56c0-13.3 10.7-24 24-24m352 48c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c6.4 0 12.5 2.5 17 7s7 10.6 7 17v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-22.1l-127 127c-9.4 9.4-24.6 9.4-33.9 0l-63-63-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l88-88c9.4-9.4 24.6-9.4 33.9 0l63 63L398.2 79.9h-22.1zm22.1 256L338 275.9c.3-.3.7-.6 1-1l33-33 60.1 60.1v-22.1c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 6.4-2.5 12.5-7 17s-10.6 7-17 7h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h22.1z"})
);

export default LanChartLineUpDownRegular;
