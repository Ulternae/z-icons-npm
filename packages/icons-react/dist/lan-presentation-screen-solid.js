import React from 'react';

export const LanPresentationScreenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 80 0 69.3 0 56s10.7-24 24-24m208 352H96c-35.3 0-64-28.7-64-64V128h448v192c0 35.3-28.7 64-64 64H280v35.5l69.8 48.8c10.9 7.6 13.5 22.6 5.9 33.4s-22.6 13.5-33.4 5.9l-66.2-46.4-66.2 46.4c-10.9 7.6-25.8 5-33.4-5.9s-5-25.8 5.9-33.4l69.8-48.8V384z"})
);

export default LanPresentationScreenSolid;
