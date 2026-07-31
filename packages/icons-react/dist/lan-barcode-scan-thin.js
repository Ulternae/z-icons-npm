import React from 'react';

export const LanBarcodeScanThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h48V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h32V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h64V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h32V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h64V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h96V40c0-4.4 3.6-8 8-8s8 3.6 8 8v184h56c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56zm0 432V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8m80 0c0 4.4-3.6 8-8 8s-8-3.6-8-8V288h16zm32 0V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8m80 0V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8m48 0V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8m80 0V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8m112 0V288h16v184c0 4.4-3.6 8-8 8s-8-3.6-8-8"})
);

export default LanBarcodeScanThin;
