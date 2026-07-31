import React from 'react';

export const LanThetaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 256c0-67.6-20.6-128.1-53-171.4S238.9 16 192 16 101.5 41.3 69 84.6 16 188.4 16 256s20.6 128.1 53 171.4S145.1 496 192 496s90.5-25.3 123-68.6 53-103.8 53-171.4m16 0c0 141.4-86 256-192 256S0 397.4 0 256 86 0 192 0s192 114.6 192 256m-280-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanThetaThin;
