import React from 'react';

export const LanXRayRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h8v352h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V80h8c13.3 0 24-10.7 24-24s-10.7-24-24-24zm56 400V80h352v352zm200-296c0-13.3-10.7-24-24-24s-24 10.7-24 24v8h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v40h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v40h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-40h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-40h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64z"})
);

export default LanXRayRegular;
