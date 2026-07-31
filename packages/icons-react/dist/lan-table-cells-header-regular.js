import React from 'react';

export const LanTableCellsHeaderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 168v248c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm48 48h88v80H48zm0 200v-72h88v88H64c-8.8 0-16-7.2-16-16m216 16h-80v-88h80zm120 0h-72v-88h88v72c0 8.8-7.2 16-16 16m16-216v80h-88v-80zm-216 0h80v80h-80z"})
);

export default LanTableCellsHeaderRegular;
