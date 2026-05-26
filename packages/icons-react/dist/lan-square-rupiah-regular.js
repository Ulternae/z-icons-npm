import React from 'react';

export const LanSquareRupiahRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 48h48c39.8 0 72 32.2 72 72 0 26.9-14.7 50.3-36.5 62.6l19.3 57.8c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2L156 288h-12v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24m48 96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v48zm88 8c0-13.3 10.7-24 24-24h40c35.3 0 64 28.7 64 64s-28.7 64-64 64h-16v32c0 13.3-10.7 24-24 24s-24-10.7-24-24zm48 56h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16z"})
);

export default LanSquareRupiahRegular;
