import React from 'react';

export const LanHexagonImageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zm330.6-57.7c-4.8-7.9-13.5-12.8-22.8-12.8s-17.9 4.8-22.8 12.8l-68.2 111.7-29.4-42c-5-7.1-13.1-11.4-21.8-11.4s-16.9 4.2-21.8 11.4l-34.7 49.6 42.7 74.6c1.4 2.5 4.1 4 6.9 4h191.6c2.9 0 5.5-1.5 6.9-4l44.4-77.6L364 234zM272 160a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanHexagonImageSolid;
