import React from 'react';

export const LanMarkerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M347.1 41.5 184 204.7 307.3 328l163.2-163.1c16.4-16.4 25.5-38.5 25.5-61.7C496 55 457 16 408.8 16c-23.1 0-45.3 9.2-61.7 25.5M172.7 216l-59 59c-47.6 47.6-79.4 108.7-91.1 175l-6.5 36.7c-.5 2.6.4 5.2 2.2 7s4.5 2.7 7 2.2l36.7-6.5c66.3-11.7 127.3-43.5 174.9-91.1l59-59L172.6 216zM335.8 30.2C355.2 10.8 381.4 0 408.8 0 465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L248.3 409.7c-49.9 49.9-114 83.3-183.5 95.5l-36.7 6.5C20.5 513 12.6 510.5 7 505s-8-13.4-6.7-21.1l6.5-36.7c12.3-69.5 45.6-133.6 95.5-183.5l203-203-21.1-21.1c-15.6-15.6-40.9-15.6-56.6 0L109.7 157.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l118-118.1c21.9-21.9 57.3-21.9 79.2 0l21.1 21.1 19.1-19.1z"})
);

export default LanMarkerThin;
