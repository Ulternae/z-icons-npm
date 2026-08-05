import React from 'react';

export function LanBuildingMagnifyingGlassSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v116.8c-12.8-3.1-26.2-4.8-40-4.8-92.8 0-168 75.2-168 168 0 2.7.1 5.4.2 8h-.2c-17.7 0-32 14.3-32 32v80h82.4c27 26.4 62.9 43.9 102.7 47.4-3 .4-6 .6-9.1.6H64c-35.3 0-64-28.7-64-64zm112 32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16M112 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm232 192.1a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 48c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120c0 24.5-7.3 47.2-19.9 66.2l60.9 60.8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.8-60.9c-19 12.6-41.7 19.9-66.2 19.9z"})
  );
}

export default LanBuildingMagnifyingGlassSolid;
