import React from 'react';

export const LanArrowsFromLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.025 384 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M186.3-29.7c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L200-4.7V184c0 4.4-3.6 8-8 8s-8-3.6-8-8V-4.7l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l88-88zm11.3 571.3c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.4 74.4V328c0-4.4 3.6-8 8-8s8 3.6 8 8v188.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88zM8 248h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanArrowsFromLineThin;
