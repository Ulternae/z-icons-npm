import React from 'react';

export const LanPenAltSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L373.9 308l70.1-70.1L306.1 100 289 82.9c-28.1-28.1-73.7-28.1-101.8 0L168 102.1zM201.9 136l19.2-19.2c9.4-9.4 24.6-9.4 33.9 0l17.1 17.1-36.2 36.2-34.1-34.1zm104.2 239.9-138-138-77.2 77.2c-10.7 10.7-18.5 24.1-22.6 38.7L32.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l77.2-77.2zm78.8-354.7L340 66.1 477.9 204l44.9-44.9c13.6-13.5 21.2-31.9 21.2-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C473.6 7.6 455.2 0 436 0s-37.6 7.6-51.1 21.2"})
);

export default LanPenAltSlashSolid;
