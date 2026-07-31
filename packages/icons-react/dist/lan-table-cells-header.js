import React from 'react';

export const LanTableCellsHeader = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v64h384V96c0-17.7-14.3-32-32-32zM0 192V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm32 112h96V192H32zm0 32v80c0 17.7 14.3 32 32 32h64V336zm128 112h128V336H160zm160 0h64c17.7 0 32-14.3 32-32v-80h-96zm96-144V192h-96v112zm-256 0h128V192H160z"})
);

export default LanTableCellsHeader;
