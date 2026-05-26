import React from 'react';

export const LanGlassCitrusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M560 80c0 59.6-40.8 109.8-96 124v16.5c64.1-14.6 112-71.9 112-140.4 0-79.5-64.5-144-144-144-56.5 0-105.5 32.6-129 80h18.2C343.3-22.3 384.6-48 432-48c70.7 0 128 57.3 128 128M80 96c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v160H80zm0 288V272h320v112c0 61.9-50.1 112-112 112h-96c-61.9 0-112-50.1-112-112M64 96v288c0 70.7 57.3 128 128 128h96c70.7 0 128-57.3 128-128V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"})
);

export default LanGlassCitrusThin;
