import React from 'react';

export const CorePlaneUpRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 288.5c59.5-42.5 119.1-85 178.6-127.6l13.4-9.6V32c0-4.4.9-8.6 2.5-12.4C263.4 8.1 274.7.1 288 .1c12.2 0 22.7 6.8 28.1 16.7.2.5.5.9.7 1.4s.4.9.6 1.4c.8 1.9 1.4 3.9 1.9 6 .2 1 .4 2.1.5 3.2.1.5.1 1.1.1 1.6v120.9l13.4 9.6 178.6 127.6v47C396.6 286 332.6 258.6 320 253.2v176.1l64 64v17l-96-32-96 32v-17l64-64V253.2c-12.6 5.4-76.6 32.8-192 82.3z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M0 288.5c0-20.7 10-40.1 26.8-52.1l165.2-118V32c0-53 43-96 96-96s96 42.9 96 96v86.4l165.2 118 6 4.8c13.2 12 20.8 29.2 20.8 47.2v144.1c-12.6-5.4-76.6-32.9-192-82.3v52.5l64 64V512c0 35.3-28.7 64-64 64h-5.2l-4.9-1.7-85.9-28.6-85.9 28.6-4.9 1.7H192c-35.3 0-64-28.7-64-64v-45.3l64-64v-52.5C76.6 399.7 12.6 427.1 0 432.5zm211.4-16.2 44.6-19.1v176.1l-64 64v17l96-32 96 32v-17l-64-64V253.2c12.6 5.4 76.6 32.8 192 82.3v-47L333.4 160.9l-13.4-9.6V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v119.3l-13.4 9.6L64 288.5v47z"})
);

export default CorePlaneUpRegular-duo;
