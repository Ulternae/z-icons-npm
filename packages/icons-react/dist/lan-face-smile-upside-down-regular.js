import React from 'react';

export const LanFaceSmileUpsideDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-334.7-63.4c15-15.6 41.1-32.6 78.7-32.6s63.7 17 78.7 32.6c9.2 9.6 24.4 9.9 33.9.7s9.9-24.4.7-33.9c-22.1-23-60-47.4-113.3-47.4s-91.2 24.4-113.3 47.4c-9.2 9.6-8.9 24.8.7 33.9s24.8 8.9 33.9-.7M208 304a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanFaceSmileUpsideDownRegular;
