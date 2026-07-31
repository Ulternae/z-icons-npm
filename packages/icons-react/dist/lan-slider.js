import React from 'react';

export const LanSlider = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm-32-32c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-80h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H448v-80c0-35.3-28.7-64-64-64zM0 256c0 8.8 7.2 16 16 16h224v-32H16c-8.8 0-16 7.2-16 16"})
);

export default LanSlider;
