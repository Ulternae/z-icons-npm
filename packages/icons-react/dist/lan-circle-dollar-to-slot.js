import React from 'react';

export const LanCircleDollarToSlot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384M16 336c-8.8 0-16 7.2-16 16v104c0 30.9 25.1 56 56 56h464c30.9 0 56-25.1 56-56V352c0-8.8-7.2-16-16-16s-16 7.2-16 16v104c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24V352c0-8.8-7.2-16-16-16m272-216c-8.8 0-16 7.2-16 16v8h-1.7c-25.6 0-46.3 20.7-46.3 46.3 0 22.6 16.4 42 38.7 45.7l45.3 7.6c6.9 1.2 12 7.1 12 14.1 0 7.9-6.4 14.3-14.3 14.3H248c-8.8 0-16 7.2-16 16s7.2 16 16 16h24v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8h1.7c25.6 0 46.3-20.7 46.3-46.3 0-22.6-16.4-42-38.7-45.7l-45.3-7.6c-6.9-1.2-12-7.1-12-14.1 0-7.9 6.4-14.3 14.3-14.3H320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-8c0-8.8-7.2-16-16-16"})
);

export default LanCircleDollarToSlot;
