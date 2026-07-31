import React from 'react';

export const LanTowerControlThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 8c0-4.4 3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v80h208c2.5 0 4.9 1.2 6.4 3.2s2 4.6 1.3 7L386.6 320H408c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v176h-16V336H80v176H64V336H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h21.4L.3 106.2c-.7-2.4-.2-5 1.3-7S5.5 96 8 96h208V16h-56c-4.4 0-8-3.6-8-8m-8 104H18.6L78 320h66zm16 208h128V112H160zm144 0h66l59.4-208H304z"})
);

export default LanTowerControlThin;
