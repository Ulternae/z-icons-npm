import React from 'react';

export const LanTablePivotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 528.013',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448.5 80h-208v80h152c13.3 0 24 10.7 24 24s-10.7 24-24 24h-152v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V208h-80v208c0 8.8 7.2 16 16 16h92.1a71.88 71.88 0 0 0 0 48h-92.1c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v92.1a71.88 71.88 0 0 0-48 0V96c0-8.8-7.2-16-16-16m-336 80h80V80h-64c-8.8 0-16 7.2-16 16zm407 161-7-7v102.1c0 35.3-28.7 64-64 64H346.4l7 7c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-7 7h102.1c8.8 0 16-7.2 16-16V313.9l-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0l48 48c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"})
);

export default LanTablePivotRegular;
