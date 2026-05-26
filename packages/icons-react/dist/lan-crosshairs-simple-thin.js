import React from 'react';

export const LanCrosshairsSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M495.9 248H392c-4.4 0-8 3.6-8 8s3.6 8 8 8h103.9C491.7 390.2 390.2 491.7 264 495.9V392c0-4.4-3.6-8-8-8s-8 3.6-8 8v103.9C121.8 491.7 20.3 390.2 16.1 264H120c4.4 0 8-3.6 8-8s-3.6-8-8-8H16.1C20.3 121.8 121.8 20.3 248 16.1V120c0 4.4 3.6 8 8 8s8-3.6 8-8V16.1C390.2 20.3 491.7 121.8 495.9 248M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"})
);

export default LanCrosshairsSimpleThin;
