import React from 'react';

export const LanFloppyDiskCircleArrowRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h161.4c-9.3-20.3-15.2-42.5-16.9-65.9C212.6 407.2 192 382 192 352c0-35.3 28.7-64 64-64 6.3 0 12.4.9 18.2 2.6C308.9 240.7 366.6 208 432 208c16.6 0 32.7 2.1 48 6v-40.8c0-17-6.7-33.3-18.7-45.3L384 50.7c-12-12-28.3-18.7-45.3-18.7zm32 96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm448 272a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-147.3-67.3c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l28.7-28.7H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h89.4l-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6"})
);

export default LanFloppyDiskCircleArrowRightSolid;
