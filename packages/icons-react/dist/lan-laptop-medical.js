import React from 'react';

export const LanLaptopMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64h384c17.7 0 32 14.3 32 32v224h32V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v224h32V96c0-17.7 14.3-32 32-32M32.5 400h575.1c-3.5 27.1-26.6 48-54.7 48H87.1c-28 0-51.2-20.9-54.7-48zm-7.6-32C11.1 368 0 379.1 0 392.9 0 441 39 480 87.1 480h465.8c48.1 0 87.1-39 87.1-87.1 0-13.7-11.1-24.9-24.9-24.9zM304 128c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
);

export default LanLaptopMedical;
