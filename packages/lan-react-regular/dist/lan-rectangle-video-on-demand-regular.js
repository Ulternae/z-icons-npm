import React from 'react';

export function LanRectangleVideoOnDemandRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h480c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm128 56v64.2c0 16.5 5.7 32.5 16 45.3 10.3-12.8 16-28.7 16-45.3V184c0-13.3 10.7-24 24-24s24 10.7 24 24v64.2c0 31.8-12.6 62.3-35.1 84.9L177 345c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-11.9-11.9c-22.5-22.5-35.1-53-35.1-84.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24m168 24c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-56 8c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56zm184-56h40c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-40c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24m24 144h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16z"})
  );
}

export default LanRectangleVideoOnDemandRegular;
