import React from 'react';

export const LanSquareIndianRupeeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 32h176c4.4 0 8 3.6 8 8s-3.6 8-8 8h-69.3c16.9 13.1 28.1 33.2 29.2 56H312c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40.9c-5.8 36.3-37.2 64-75.1 64h-35.3l123.9 89.5c3.6 2.6 4.4 7.6 1.8 11.2s-7.6 4.4-11.2 1.8l-144-104c-2.8-2-4-5.6-2.9-8.9s4.1-5.5 7.6-5.5h60c29 0 53.2-20.6 58.8-48L136 216c-4.4 0-8-3.6-8-8s3.6-8 8-8h119.9c-2.1-31.3-28.1-56-59.9-56h-60c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanSquareIndianRupeeThin;
