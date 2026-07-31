import React from 'react';

export const LanHandPaperThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232 48v200c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v255.4c0 3.2-1.9 6.2-4.9 7.4s-6.4.6-8.7-1.7l-67.8-67.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l111.8 111.7c42 42 99 65.6 158.4 65.6h8.5c83.9 0 152-68.1 152-152V144c0-17.7-14.3-32-32-32s-32 14.3-32 32v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V48c0-17.7-14.3-32-32-32s-32 14.3-32 32m32-48c25.3 0 46 19.5 47.9 44.3C320.4 36.6 331.7 32 344 32c26.5 0 48 21.5 48 48v28.2c8.5-7.6 19.7-12.2 32-12.2 26.5 0 48 21.5 48 48v200c0 92.8-75.2 168-168 168h-8.5c-63.7 0-124.7-25.3-169.7-70.3L14.1 329.9c-18.7-18.7-18.7-49.1 0-67.9s49.1-18.7 67.9 0l54 54.1V80c0-26.5 21.5-48 48-48 12.4 0 23.6 4.7 32.1 12.3C218 19.5 238.7 0 264 0"})
);

export default LanHandPaperThin;
