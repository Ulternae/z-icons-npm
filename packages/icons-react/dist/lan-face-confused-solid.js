import React from 'react';

export const LanFaceConfusedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52.8-126.4-12.8 9.6c-10.6 8-25.6 5.8-33.6-4.8s-5.8-25.6 4.8-33.6l12.8-9.6c37.4-28 82.9-43.2 129.6-43.2h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c-36.3 0-71.7 11.8-100.8 33.6M144 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanFaceConfusedSolid;
