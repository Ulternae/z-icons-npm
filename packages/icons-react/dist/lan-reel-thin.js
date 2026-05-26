import React from 'react';

export const LanReelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16zM32 32C32 14.3 46.3 0 64 0h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v32h-16V64H80v32H64V64c-17.7 0-32-14.3-32-32m32 432c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32v-32h16v32h288v-32h16v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m32-320c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m8 56h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8m-8 72c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m8 56h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanReelThin;
