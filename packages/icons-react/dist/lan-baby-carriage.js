import React from 'react';

export const LanBabyCarriage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 192h-32V32c0-17.7-14.3-32-32-32h-24C139.2 0 64 75.2 64 168v104c0 53 43 96 96 96h192c53 0 96-43 96-96V160h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v48zm96 32v48c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-48zM256 32v160H96v-24c0-75.1 60.9-136 136-136zM120 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m272-80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanBabyCarriage;
