import React from 'react';

export const LanGaugeCirclePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c126.8 0 232.1 92.2 252.4 213.2-14.3-3.4-29.1-5.2-44.4-5.2-70.9 0-132.8 38.4-166.1 95.6-5.3-4.6-11.3-8.3-17.9-11V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64q8.55 0 16.5-2.1c2.5 34.5 14 66.4 32.3 93.5-15.8 3-32.1 4.6-48.8 4.6-141.4 0-256-114.6-256-256S146.6 0 288 0M176 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m272-112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"})
);

export default LanGaugeCirclePlusSolid;
