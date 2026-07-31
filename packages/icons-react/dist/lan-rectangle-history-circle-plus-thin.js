import React from 'react';

export const LanRectangleHistoryCirclePlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M501.6 221c-12.1-4.7-24.8-8.2-38-10.4-4.9-1.7-10.1-2.6-15.6-2.6H64c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h186.9c1.9 5.4 4.1 10.8 6.5 16H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h384c22.4 0 42.2 11.5 53.6 29M456 96c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-4.4 0-8-3.6-8-8s3.6-8 8-8zM408 0c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8zm152 400a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-64v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanRectangleHistoryCirclePlusThin;
