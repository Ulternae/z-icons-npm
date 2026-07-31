import React from 'react';

export const LanArrowDownToSquareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v348.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L232 324.7zM16 160c0-26.5 21.5-48 48-48h56c4.4 0 8-3.6 8-8s-3.6-8-8-8H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z"})
);

export default LanArrowDownToSquareThin;
