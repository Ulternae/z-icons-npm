import React from 'react';

export const LanRectangleHistoryThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48zm-48-64c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64zm8-96c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-4.4 0-8-3.6-8-8s3.6-8 8-8zM408 0c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanRectangleHistoryThin;
