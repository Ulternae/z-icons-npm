import React from 'react';

export const LanAssistiveListeningSystems = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M350 8.2c-4.3 7.7-1.5 17.5 6.2 21.8C430 71 479.9 149.7 479.9 240c0 8.8 7.2 16 16 16s16-7.2 16-16c0-102.4-56.6-191.6-140.2-238-7.7-4.3-17.5-1.5-21.8 6.2zM96 240c0-79.5 64.5-144 144-144s144 64.5 144 144c0 41.9-17.9 79.7-46.5 106-10.1 9.2-17.5 22.6-17.5 38 0 53-43 96-96 96h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16c70.7 0 128-57.3 128-128 0-4.8 2.4-10.1 7.1-14.4C394 337.5 416 291.3 416 240c0-97.2-78.8-176-176-176S64 142.8 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16m64 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48M32 504a24 24 0 1 0 0-48 24 24 0 1 0 0 48m20.7-131.3c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0M160 240c0-44.2 35.8-80 80-80s80 35.8 80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9-50.1-112-112-112s-112 50.1-112 112c0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanAssistiveListeningSystems;
