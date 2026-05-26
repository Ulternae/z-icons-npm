import React from 'react';

export const LanFaceGrin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 96c-38 0-74.5-4.2-108.5-12 22.7 36.1 62.8 60 108.5 60s85.8-23.9 108.5-60c-34 7.8-70.5 12-108.5 12m153.5-34.7C390 383.6 328.6 432 256 432s-134-48.4-153.5-114.7c-3.4-11.7 8.4-21 20-17.3 39.9 12.8 85.3 20 133.5 20s93.6-7.2 133.5-20c11.6-3.7 23.4 5.6 20 17.3M152 208a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanFaceGrin;
