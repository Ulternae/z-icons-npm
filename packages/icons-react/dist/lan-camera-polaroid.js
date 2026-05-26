import React from 'react';

export const LanCameraPolaroid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 448h448c17.7 0 32-14.3 32-32v-44.6c0-6.3-1.9-12.5-5.4-17.8l-1.1-1.6H38.4l-1.1 1.6c-3.5 5.3-5.4 11.4-5.4 17.8L32 416c0 17.7 14.3 32 32 32m452.2-128-28.1-42.2c-5.3-7.9-8.1-17.2-8.1-26.6V96c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v155.2c0 9.5-2.8 18.7-8.1 26.6L59.8 320zM512 480H64c-35.3 0-64-28.7-64-64v-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v155.2c0 3.2.9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64m-96-328a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-128-8a48 48 0 1 0 0 96 48 48 0 1 0 0-96m80 48a80 80 0 1 1-160 0 80 80 0 1 1 160 0M112 384h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanCameraPolaroid;
