import React from 'react';

export const LanTableRowsRemoveBelowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 515.425',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M.3 422.5c3.1 30.1 27 54.1 57.1 57.1l6.5.3h32v-16h-32c-26.5 0-48-21.5-48-48v-152h416v152c0 26.5-21.5 48-48 48h-32v16h32l6.5-.3c32.3-3.3 57.5-30.5 57.5-63.7v-320c0-35.3-28.7-64-64-64h-320l-6.5.3C25.2 35.6 0 62.9 0 96v320zM16 96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v152H16zm142.8 405.8c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l53.8-53.8 53.8 53.8c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L235.2 448l53.8-53.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-53.8 53.8-53.8-53.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l53.8 53.8z"})
);

export default LanTableRowsRemoveBelowThin;
