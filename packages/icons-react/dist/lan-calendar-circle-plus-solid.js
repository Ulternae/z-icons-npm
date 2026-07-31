import React from 'react';

export const LanCalendarCirclePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H96c-35.3 0-64 28.7-64 64v48h448v-48c0-35.3-28.7-64-64-64h-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H192zM32 416c0 35.3 28.7 64 64 64h161.4c-11.2-24.4-17.4-51.4-17.4-80 0-78.7 47.4-146.4 115.1-176H32zm400 128a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanCalendarCirclePlusSolid;
