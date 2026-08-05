import React from 'react';

export function LanTicketPerforatedPlaneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm416 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0M136 224l-19.2-25.6c-3-4-7.8-6.4-12.8-6.4H90.2c-5.2 0-9 4.9-7.8 9.9L95 252.1c.6 2.5.6 5.2 0 7.8l-12.5 50.2c-1.3 5 2.6 9.9 7.8 9.9h13.8c5 0 9.8-2.4 12.8-6.4l19.2-25.6h40l-27.6 69c-2.1 5.3 1.8 11 7.4 11h31.7c7.8 0 15.2-3.8 19.7-10.2l48.8-69.8h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64l-48.8-69.8c-4.5-6.4-11.8-10.2-19.7-10.2h-31.7c-5.7 0-9.5 5.7-7.4 11l27.6 69h-40z"})
  );
}

export default LanTicketPerforatedPlaneSolid;
