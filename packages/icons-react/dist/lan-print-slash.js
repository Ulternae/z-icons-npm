import React from 'react';

export const LanPrintSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L470.5 416H512c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H246.5L160 105.5V64c0-17.7 14.3-32 32-32h149.5c8.5 0 16.6 3.4 22.6 9.4l42.5 42.5c6 6 9.4 14.1 9.4 22.6V144h32v-37.5c0-17-6.7-33.3-18.7-45.3l-42.6-42.5C374.7 6.7 358.5 0 341.5 0H192c-35.3 0-64 28.7-64 64v9.5zM278.5 224H480c17.7 0 32 14.3 32 32v128h-73.5zM96 192c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32h64v64c0 17.7 14.3 32 32 32h256c10.2 0 19.4-4.8 25.2-12.3L421.5 480H160V352h133.5l-32-32H160c-17.7 0-32 14.3-32 32v32H64V256c0-17.7 14.3-32 32-32h69.5l-32-32zm384 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanPrintSlash;
