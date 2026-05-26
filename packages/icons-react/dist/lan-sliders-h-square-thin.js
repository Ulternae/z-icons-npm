import React from 'react';

export const LanSlidersHSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm16 320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-64-72c0 4.4-3.6 8-8 8h-56v24c0 17.7-14.3 32-32 32s-32-14.3-32-32v-24H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h184v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v24h56c4.4 0 8 3.6 8 8m-112 0v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zm104-184c4.4 0 8 3.6 8 8s-3.6 8-8 8H192v24c0 17.7-14.3 32-32 32s-32-14.3-32-32v-24H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v24zm-232-24v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
);

export default LanSlidersHSquareThin;
