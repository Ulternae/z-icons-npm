import React from 'react';

export const LanTableCellsRows = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 64v96h256V96c0-17.7-14.3-32-32-32zm-32-32h256c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm0 416V64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm32 0h224c17.7 0 32-14.3 32-32v-64H160zm256-128V192H160v128z"})
);

export default LanTableCellsRows;
