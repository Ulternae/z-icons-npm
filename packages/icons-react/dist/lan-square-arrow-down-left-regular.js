import React from 'react';

export const LanSquareArrowDownLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 432c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm176-200c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-54.1l103-103c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-103 103z"})
);

export default LanSquareArrowDownLeftRegular;
