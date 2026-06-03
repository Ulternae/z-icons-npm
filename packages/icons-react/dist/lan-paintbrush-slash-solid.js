import React from 'react';

export const LanPaintbrushSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-167-167c6-5.7 11.4-12.1 16.1-19.2L565.7 95.5c6.7-10.1 10.3-21.9 10.3-34.1C576 27.5 548.5 0 514.6 0c-12.1 0-24 3.6-34.1 10.3L259.1 158c-7 4.7-13.4 10.1-19.2 16.1zM176 288c-61.9 0-112 50.1-112 112 0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-21.6-6.1-41.8-16.7-58.9l-36.4-36.4C217.8 294.1 197.6 288 176 288"})
);

export default LanPaintbrushSlashSolid;
