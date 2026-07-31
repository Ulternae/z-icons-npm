import React from 'react';

export const LanTableCellsMergeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c33.1 0 60.4 25.2 63.7 57.5l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64zM232 464h152c26.5 0 48-21.5 48-48v-80H232zM16 416c0 26.5 21.5 48 48 48h152V336H16zm0-96h416V192H16zm216-144h200V96c0-26.5-21.5-48-48-48H232zM64 48c-26.5 0-48 21.5-48 48v80h200V48z"})
);

export default LanTableCellsMergeThin;
