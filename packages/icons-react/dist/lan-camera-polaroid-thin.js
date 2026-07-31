import React from 'react';

export const LanCameraPolaroidThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 464h448c26.5 0 48-21.5 48-48v-44.6c0-6.7-1.4-13.3-4.1-19.4H20.1c-2.7 6.1-4.1 12.7-4.1 19.4V416c0 26.5 21.5 48 48 48m482.1-128-44.7-67.1c-3.5-5.3-5.4-11.4-5.4-17.8V96c0-26.5-21.5-48-48-48H128c-26.5 0-48 21.5-48 48v155.2c0 6.3-1.9 12.5-5.4 17.8l-44.7 67zM512 480H64c-35.3 0-64-28.7-64-64v-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v155.2c0 3.2.9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64m-96-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-16-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-192 64a80 80 0 1 1 160 0 80 80 0 1 1-160 0m80 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128M104 400h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanCameraPolaroidThin;
