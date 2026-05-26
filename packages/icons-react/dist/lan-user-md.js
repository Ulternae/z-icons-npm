import React from 'react';

export const LanUserMd = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0M32 496c0-62.7 40.1-116 96-135.8v42.1c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7v-49.4c5.3-.6 10.6-.9 16-.9h96c5.4 0 10.7.3 16 .9V402c-27.6 7.1-48 32.2-48 62v24c0 8.8 7.2 16 16 16s16-7.2 16-16v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v24c0 8.8 7.2 16 16 16s16-7.2 16-16v-24c0-29.8-20.4-54.9-48-62v-41.8c55.9 19.8 96 73.1 96 135.8 0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176h-96C78.8 320 0 398.8 0 496c0 8.8 7.2 16 16 16s16-7.2 16-16m136-40c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24"})
);

export default LanUserMd;
