import React from 'react';

export const LanForwardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M371.7 43.1C360.1 32 343 28.9 328.3 35.2S304 56 304 72v136.3L131.7 43.2c-11.6-11.2-28.7-14.3-43.4-8S64 56 64 72v368c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9L304 303.7V440c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9l192-184c7.9-7.5 12.3-18 12.3-28.9s-4.5-21.3-12.3-28.9z"})
);

export default LanForwardSolid;
