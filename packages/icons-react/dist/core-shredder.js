import React from 'react';

export const CoreShredder = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 512h-64V288h64zm96 0h-64V288h64zm96 0h-64V288h64zm32-384h32c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64V192H64v224C30.9 416 3.6 390.8.3 358.5L0 352V192c0-35.3 28.7-64 64-64h32V0h320zm-256 0h192V64H160z"})
);

export default CoreShredder;
