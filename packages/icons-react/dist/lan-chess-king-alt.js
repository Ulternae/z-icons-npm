import React from 'react';

export const LanChessKingAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160-32c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48h86.1c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L248 208c8.8 0 16 7.2 16 16s-7.2 16-16 16h-6.4L256 384l50.7 50.7c8.5 8.5 13.3 20 13.3 32 0 25-20.3 45.2-45.3 45.3H45.2C20.2 512 0 491.7 0 466.7c0-12 4.8-23.5 13.2-32L64 384l14.4-144H72c-8.8 0-16-7.2-16-16s7.2-16 16-16l-37.3-74.5c-1.8-3.6-2.7-7.6-2.7-11.6C32 107.6 43.6 96 57.9 96H144V48h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16M86.6 406.6l-50.7 50.8c-2.5 2.5-3.9 5.9-3.9 9.4 0 7.3 5.9 13.2 13.2 13.3h229.5c6.4 0 11.7-4.6 13-10.6l.3-2.7c0-2.6-.8-5.2-2.2-7.3l-1.7-2-50.7-50.8-6.7-6.6H93.3l-6.7 6.6zM97.8 368h124.5l-12.8-128h-98.9zm10-160h104.4l40-80H67.8z"})
);

export default LanChessKingAlt;
