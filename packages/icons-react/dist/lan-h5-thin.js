import React from 'react';

export const LanH5Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V264h192v176c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v176H48zm280-8c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h120c48.6 0 88 39.4 88 88s-39.4 88-88 88H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h120c57.4 0 104-46.6 104-104s-46.6-104-104-104H336V80h184c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanH5Thin;
