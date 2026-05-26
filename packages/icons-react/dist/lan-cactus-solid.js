import React from 'react';

export const LanCactusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c53 0 96 43 96 96v256h32c8.8 0 16-7.2 16-16v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64c0 61.9-50.1 112-112 112h-32v16c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V320h-32c-61.9 0-112-50.1-112-112v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64c0 8.8 7.2 16 16 16h32V96c0-53 43-96 96-96m32 360a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-64-224a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanCactusSolid;
