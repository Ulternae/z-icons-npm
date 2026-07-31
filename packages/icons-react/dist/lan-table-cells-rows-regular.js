import React from 'react';

export const LanTableCellsRowsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 480h248c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zm48-312V80h200c8.8 0 16 7.2 16 16v72zm0 48h216v80H184zm216 200c0 8.8-7.2 16-16 16H184v-88h216z"})
);

export default LanTableCellsRowsRegular;
