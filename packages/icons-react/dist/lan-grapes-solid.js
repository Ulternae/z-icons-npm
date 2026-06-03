import React from 'react';

export const LanGrapesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -9.35 576 521.35',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M389.1-4.7c6.2-6.2 16.4-6.2 22.6 0l12.1 12.1c31.2 31.2 31.2 81.9 0 113.1 31.2-31.2 81.9-31.2 113.1 0l12.1 12.1c6.2 6.2 6.2 16.4 0 22.6l-12.1 12.1c-31.2 31.2-81.9 31.2-113.1 0l-46.9-46.9c-31.2-31.2-31.2-81.9 0-113.1zM224.4 152a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-80-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-80 192a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-32 144a56 56 0 1 1 112 0 56 56 0 1 1-112 0m144-32a56 56 0 1 1 112 0 56 56 0 1 1-112 0m192-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-168-56a56 56 0 1 1 112 0 56 56 0 1 1-112 0m192-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanGrapesSolid;
