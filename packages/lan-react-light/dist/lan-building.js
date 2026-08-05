import React from 'react';

export function LanBuilding({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h64v-80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v80h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm96 448h64v-80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm-32 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64zm96-384c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm16 96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m-128-96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm16 96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16"})
  );
}

export default LanBuilding;
