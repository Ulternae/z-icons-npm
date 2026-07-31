import React from 'react';

export const LanSquareUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h17.1c7.8-54.3 54.4-96 110.9-96h64c56.4 0 103.1 41.7 110.9 96H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm66 352h188c-7.1-27.6-32.2-48-62-48h-64c-29.8 0-54.9 20.4-62 48M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 72a40 40 0 1 0 0 80 40 40 0 1 0 0-80m88 40a88 88 0 1 1-176 0 88 88 0 1 1 176 0"})
);

export default LanSquareUserRegular;
