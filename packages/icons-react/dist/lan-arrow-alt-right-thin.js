import React from 'react';

export const LanArrowAltRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M427.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-4.6-4.6-11.5-5.9-17.4-3.5S240 89.5 240 96v104c0 4.4-3.6 8-8 8H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h184c4.4 0 8 3.6 8 8v104c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5zm11.3-33.9c12.5 12.5 12.5 32.8 0 45.3l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S223.9 429 223.9 416v-96h-176c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h176V96c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l160 160z"})
);

export default LanArrowAltRightThin;
