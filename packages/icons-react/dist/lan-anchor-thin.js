import React from 'react';

export const LanAnchorThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256.5 16a56 56 0 1 0 0 112 56 56 0 1 0 0-112m-72 56c0-39.8 32.2-72 72-72s72 32.2 72 72c0 37.1-28 67.6-64 71.6v336.3c89.1-4.2 160-77.7 160-167.8v-54.4l-50.7 44.4c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3l64-56c3-2.6 7.5-2.6 10.5 0l64 56c3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3.8l-50.7-44.4v54.4c0 101.6-82.4 184-184 184s-184-82.4-184-184v-54.4l-50.7 44.4c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3l64-56c3-2.6 7.5-2.6 10.5 0l64 56c3.3 2.9 3.7 8 .8 11.3s-8 3.7-11.3.8l-50.7-44.4v54.4c0 90.1 70.9 163.6 160 167.8V143.6c-36-4-64-34.5-64-71.6z"})
);

export default LanAnchorThin;
