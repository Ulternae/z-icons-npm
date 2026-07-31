import React from 'react';

export const LanMobileSignal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32h224c17.7 0 32 14.3 32 32v259.3c9.9-10.1 20.6-19.4 32-27.9V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h176.1c.3-10.8 1.1-21.5 2.6-32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m80 368c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm384-112c-132.5 0-240 107.5-240 240 0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9 93.1-208 208-208 8.8 0 16-7.2 16-16s-7.2-16-16-16m-16 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-144c0-8.8-7.2-16-16-16-79.5 0-144 64.5-144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9 50.1-112 112-112 8.8 0 16-7.2 16-16"})
);

export default LanMobileSignal;
