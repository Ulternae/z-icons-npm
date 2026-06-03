import React from 'react';

export const LanPaperclipVerticalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 104C16 28.9 76.9-32 152-32s136 60.9 136 136v240c0 48.6-39.4 88-88 88s-88-39.4-88-88V120c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 22.1 17.9 40 40 40s40-17.9 40-40V104c0-48.6-39.4-88-88-88s-88 39.4-88 88v256c0 75.1 60.9 136 136 136s136-60.9 136-136V160c0-13.3 10.7-24 24-24s24 10.7 24 24v200c0 101.6-82.4 184-184 184S16 461.6 16 360z"})
);

export default LanPaperclipVerticalRegular;
