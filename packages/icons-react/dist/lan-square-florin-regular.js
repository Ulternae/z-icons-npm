import React from 'react';

export const LanSquareFlorinRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240.4 60.7c9.5-22.3 31.4-36.7 55.7-36.7H320c13.3 0 24 10.7 24 24s-10.7 24-24 24h-23.9c-5 0-9.6 3-11.6 7.6L263.8 224H296c13.3 0 24 10.7 24 24s-10.7 24-24 24h-52.7l-35.7 83.3c-9.6 22.3-31.5 36.7-55.7 36.7H128c-13.3 0-24-10.7-24-24s10.7-24 24-24h23.9c5 0 9.6-3 11.6-7.6l27.6-64.4h-39c-13.3 0-24-10.7-24-24s10.7-24 24-24h59.6l28.8-67.3z"})
);

export default LanSquareFlorinRegular;
