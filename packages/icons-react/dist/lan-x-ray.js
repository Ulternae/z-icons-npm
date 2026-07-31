import React from 'react';

export const LanXRay = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v384H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm48 416V64h384v384zm208-320c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80v-48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96v-48h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80z"})
);

export default LanXRay;
