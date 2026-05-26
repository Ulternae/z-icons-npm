import React from 'react';

export const LanArrowsMinimizeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M9.4 41.4c12.5-12.5 32.8-12.5 45.3 0l73.3 73.3V80c0-17.7 14.3-32 32-32s32 14.3 32 32v112c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h34.7L9.3 86.6c-12.4-12.5-12.4-32.7.1-45.2m429.3 0c12.5 12.5 12.5 32.8 0 45.3L365.3 160H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32s32 14.3 32 32v34.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0zM48 352c-17.7 0-32-14.3-32-32s14.3-32 32-32h112c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L82.7 352zm208-32c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32s-14.3 32-32 32h-34.7l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L320 397.3V432c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
);

export default LanArrowsMinimizeSolid;
