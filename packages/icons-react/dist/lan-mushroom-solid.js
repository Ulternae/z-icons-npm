import React from 'react';

export const LanMushroomSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256 0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64C0 114.6 114.6 0 256 0m-73.6 368h147.2l14.7 73.7c4 19.8-11.2 38.3-31.4 38.3H199c-20.2 0-35.3-18.5-31.4-38.3zM128 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M143.2 81.2c12.6 27.6 40.5 46.8 72.8 46.8 42.9 0 77.9-33.8 79.9-76.2C283 49.3 269.6 48 256 48c-41.6 0-80.3 12.2-112.8 33.2"})
);

export default LanMushroomSolid;
