import React from 'react';

export const LanLuchadorMaskRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 208c0-97.2-78.8-176-176-176S48 110.8 48 208v128c0 79.5 64.5 144 144 144h64c79.5 0 144-64.5 144-144zM0 208C0 84.3 100.3-16 224-16S448 84.3 448 208v128c0 106-86 192-192 192h-64C86 528 0 442 0 336zm210.4-31.8L224 200l13.6-23.8c11.4-19.9 32.6-32.2 55.5-32.2H352c17.7 0 32 14.3 32 32v32c0 44.2-35.8 80-80 80h-40l16 32h8c35.3 0 64 28.7 64 64s-28.7 64-64 64H160c-35.3 0-64-28.7-64-64s28.7-64 64-64h8l16-32h-40c-44.2 0-80-35.8-80-80v-32c0-17.7 14.3-32 32-32h58.9c23 0 44.2 12.3 55.6 32.2zM177.8 248c7.9 0 14.2-6.4 14.2-14.2 0-27.5-22.3-49.8-49.8-49.8h-24c-7.9 0-14.2 6.4-14.2 14.2 0 27.5 22.3 49.8 49.8 49.8zm116.4 0c27.5 0 49.8-22.3 49.8-49.8 0-7.9-6.4-14.2-14.2-14.2h-24c-27.5 0-49.8 22.3-49.8 49.8 0 7.9 6.4 14.2 14.2 14.2zM136 384c0 13.3 10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24H160c-13.3 0-24 10.7-24 24"})
);

export default LanLuchadorMaskRegular;
