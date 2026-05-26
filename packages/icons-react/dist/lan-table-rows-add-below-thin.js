import React from 'react';

export const LanTableRowsAddBelowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M.3 422.5c3.1 30.1 27 54.1 57.1 57.1l6.5.3v-16c-26.5 0-48-21.5-48-48v-152h416v152c0 24.9-18.9 45.3-43.1 47.8l-4.9.2v16l6.5-.3c32.3-3.3 57.5-30.5 57.5-63.7v-320c0-35.3-28.7-64-64-64h-320l-6.5.3C25.2 35.6 0 62.9 0 96v320zM16 96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v152H16zm120 352c0 4.4 3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8"})
);

export default LanTableRowsAddBelowThin;
