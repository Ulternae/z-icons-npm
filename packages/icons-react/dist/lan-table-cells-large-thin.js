import React from 'react';

export const LanTableCellsLargeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232 48v200h200V96c0-26.5-21.5-48-48-48zm-16 0H64c-26.5 0-48 21.5-48 48v152h200zM16 264v152c0 26.5 21.5 48 48 48h152V264zm216 200h152c26.5 0 48-21.5 48-48V264H232zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanTableCellsLargeThin;
