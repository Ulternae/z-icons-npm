import React from 'react';

export const LanScarfThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 104c0-48.6 39.4-88 88-88h112c48.6 0 88 39.4 88 88v56.2c0 23.3-9.3 45.7-25.8 62.2L352 244.6l-89.4-89.4c-10.1-10.1-2.9-27.3 11.3-27.3H288c4.4 0 8-3.6 8-8s-3.6-8-8-8h-14.1c-28.5 0-42.8 34.5-22.6 54.6l89.4 89.5-84.7 84.7-118.2-118.2a88.1 88.1 0 0 1-25.8-62.3zm144 259.3 138.3 138.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.3 352l36.7-36.7 138.3 138.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L315.3 304l36.7-36.7 138.3 138.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L363.3 256l22.2-22.2c19.5-19.5 30.5-46 30.5-73.5v-56.2C416 46.6 369.4 0 312 0H200C142.6 0 96 46.6 96 104v56.2c0 27.6 11 54 30.5 73.5L244.7 352zm-141.3-73.4L10.3 394.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L126 301.2zm48 48L58.3 442.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L174 349.2zm48 48L106.3 490.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L222 397.2z"})
);

export default LanScarfThin;
