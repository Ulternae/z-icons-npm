import React from 'react';

export const LanUserMdThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224M96 128a128 128 0 1 0 256 0 128 128 0 1 0-256 0M16 496c0-74.6 51-137.2 120-155v59.5c-27.1 3.9-48 27.2-48 55.4 0 30.9 25.1 56 56 56s56-25.1 56-56c0-28.2-20.9-51.6-48-55.4v-62.8q11.7-1.8 24-1.8h96q12.3 0 24 1.8v62.8c-27.1 3.9-48 27.2-48 55.4v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40c0-22.1 17.9-40 40-40s40 17.9 40 40v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40c0-28.2-20.9-51.6-48-55.4V341c69 17.8 120 80.4 120 155v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-97.2-78.8-176-176-176h-96C78.8 320 0 398.8 0 496v8c0 4.4 3.6 8 8 8s8-3.6 8-8zm168-40c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40"})
);

export default LanUserMdThin;
