import React from 'react';

export const LanLaptopCodeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 48h384c26.5 0 48 21.5 48 48v240h16V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v240h16V96c0-26.5 21.5-48 48-48m492.8 352c1.8 0 3.2 1.4 3.2 3.2 0 33.6-27.2 60.8-60.8 60.8H76.8C43.2 464 16 436.8 16 403.2c0-1.8 1.4-3.2 3.2-3.2zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2zm250.5-226.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-58.3-58.3 58.3-58.3zm112-11.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l58.3 58.3-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l64-64c3.1-3.1 3.1-8.2 0-11.3l-64-64z"})
);

export default LanLaptopCodeThin;
