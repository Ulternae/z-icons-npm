import React from 'react';

export const LanScalpelLineDashedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M150.3 352 38.6 464H86c63.7 0 124.7-25.3 169.7-70.3l41.7-41.7zM463.5 38.1 166.3 336h165.6c29.4-.2 57.5-12 78.3-32.8L570 143.4c14.1-14.1 21.9-33.2 21.9-53.1-.2-41-33.8-74.3-75-74.3-20 0-39.3 8-53.3 22.1zm-42 276.4c-22.8 22.8-53.4 36.1-85.5 37.4v.1h-16l-53 53c-48 48-113.1 75-181 75H0l16-16L452.2 26.8C469.3 9.7 492.7 0 516.9 0c49.9 0 90.8 40.3 91 90.2.1 24.2-9.4 47.4-26.5 64.5zM328 464h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H328c-4.4 0-8-3.6-8-8s3.6-8 8-8m176 0h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanScalpelLineDashedThin;
