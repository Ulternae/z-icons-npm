import React from 'react';

export const LanMagnifyingGlassMusicThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m32-304v100.3c-11.7-12.5-28.9-20.3-48-20.3-35.3 0-64 26.9-64 60s28.7 60 64 60 63.9-26.8 64-59.8V112h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24c-8.8 0-16 7.2-16 16m-48 96c27.5 0 48 20.7 48 44s-20.5 44-48 44-48-20.7-48-44 20.5-44 48-44"})
);

export default LanMagnifyingGlassMusicThin;
