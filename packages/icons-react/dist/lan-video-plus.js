import React from 'react';

export const LanVideoPlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM96 64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm368 108v40l80-60v208l-80-60v40l73.6 55.2c4.2 3.1 9.2 4.8 14.4 4.8 13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24-5.2 0-10.2 1.7-14.4 4.8zM208 328c0 8.8 7.2 16 16 16s16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16s-7.2-16-16-16h-56v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56z"})
);

export default LanVideoPlus;
