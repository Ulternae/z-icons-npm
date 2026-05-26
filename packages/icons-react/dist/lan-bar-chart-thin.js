import React from 'react';

export const LanBarChartThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v360c0 35.3 28.7 64 64 64h424c4.4 0 8 3.6 8 8s-3.6 8-8 8H80c-44.2 0-80-35.8-80-80V40c0-4.4 3.6-8 8-8m112 72c0-4.4 3.6-8 8-8h216c4.4 0 8 3.6 8 8s-3.6 8-8 8H128c-4.4 0-8-3.6-8-8m8 120h152c4.4 0 8 3.6 8 8s-3.6 8-8 8H128c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h288c4.4 0 8 3.6 8 8s-3.6 8-8 8H128c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanBarChartThin;
