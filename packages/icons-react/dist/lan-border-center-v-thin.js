import React from 'react';

export const LanBorderCenterVThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M216 472c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8zM48 448a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32-192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M400 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0M16 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0m288 192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0M144 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanBorderCenterVThin;
