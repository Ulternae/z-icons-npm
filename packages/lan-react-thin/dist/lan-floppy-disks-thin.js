import React from 'react';

export function LanFloppyDisksThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 0c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V141.3c0-17-6.7-33.3-18.7-45.3L416 18.7C404 6.7 387.7 0 370.7 0zm-48 64c0-26.5 21.5-48 48-48h32v80c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V17.9c7.7 2.2 14.9 6.4 20.7 12.2l77.3 77.3c9 9 14.1 21.2 14.1 33.9L496 352c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48zm96 32V16h160v80c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16m-192 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v344c0 35.3 28.7 64 64 64h344c4.4 0 8-3.6 8-8s-3.6-8-8-8H64c-26.5 0-48-21.5-48-48zm240 152a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
  );
}

export default LanFloppyDisksThin;
