import React from 'react';

export const LanDropletDegree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 480c-88.4 0-160-71.6-160-160 0-16.4 6.2-40.2 18.5-69.8 12-28.9 28.6-60.5 46.8-91.4 36-61.4 76.6-118.1 94.7-142.7 18.1 24.6 58.7 81.3 94.7 142.7 18.2 31 34.8 62.5 46.8 91.4 12.3 29.6 18.5 53.4 18.5 69.8 0 88.4-71.6 160-160 160M64 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5h-.4c-10 0-19.3 4.5-25.2 12.5C194.2 45.9 64 228.8 64 320M448 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanDropletDegree;
