import React from 'react';

export const LanUserVneckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0m54.3 182.1c-1.9-2.3-4.9-3.5-7.8-2.9C61.3 322.9 0 394.3 0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-76.3 53.4-140.1 124.8-156.1l76.9 97.1c1.5 1.9 3.8 3 6.3 3s4.8-1.1 6.3-3l76.9-97.1C378.6 339.9 432 403.7 432 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-85.7-61.3-157.2-142.5-172.8-2.9-.6-5.9.6-7.8 2.9l-73.7 93z"})
);

export default LanUserVneckThin;
