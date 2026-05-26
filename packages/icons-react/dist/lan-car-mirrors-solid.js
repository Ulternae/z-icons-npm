import React from 'react';

export const LanCarMirrorsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M197.4 96c-13.6 0-25.7 8.6-30.2 21.4L141.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4zM32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32h41.3l33.5-95.7C120.3 57.8 156.6 32 197.4 32h181.2c40.8 0 77.1 25.8 90.6 64.3l33.5 95.7H544c17.7 0 32 14.3 32 32s-14.3 32-32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm96 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanCarMirrorsSolid;
