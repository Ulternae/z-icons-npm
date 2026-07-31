import React from 'react';

export const LanMushroomRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M295.9 51.8C391.7 70.4 464 154.8 464 256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16 0-73.3 37.9-137.7 95.2-174.8 12.6 27.6 40.5 46.8 72.8 46.8 42.9 0 77.9-33.8 79.9-76.2M64 320h108.3l-9.7 125.5c-1.4 18.6 13.3 34.5 31.9 34.5h122.9c18.6 0 33.3-15.9 31.9-34.5L339.7 320H448c35.3 0 64-28.7 64-64C512 114.6 397.4 0 256 0S0 114.6 0 256c0 35.3 28.7 64 64 64m147.8 112 8.6-112h71.1l8.6 112zM144 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m240-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanMushroomRegular;
