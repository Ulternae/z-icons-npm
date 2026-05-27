import React from 'react';

export const CoreCloudArrowUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 32c82.7 0 151.9 57 170.8 133.8C526.4 184.5 576 246.4 576 320c0 88.4-71.6 160-160 160H312V273.9l72 72 33.9-33.9-113-113c-9.4-9.4-24.6-9.4-33.9 0L158 312l33.9 33.9 72-72V480h-104C71.6 480 0 408.4 0 320c0-73.5 49.6-135.4 117.1-154.1C136 89 205.3 32 288 32"})
);

export default CoreCloudArrowUpSolid;
