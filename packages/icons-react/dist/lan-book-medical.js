import React from 'react';

export const LanBookMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm64 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64c-17.7 0-32 14.3-32 32zM208 112h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanBookMedical;
