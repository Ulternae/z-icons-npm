import React from 'react';

export const LanTableColumnsMergePreviousRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 33.1 25.2 60.4 57.5 63.7l6.5.3h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-35.3-28.7-64-64-64zm320 48c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H248v-48h-48v48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h136v48h48V80zm-151 95c-9.4-9.4-24.6-9.4-33.9 0l-64 64-1.7 1.8c-7.7 9.4-7.1 23.3 1.7 32.1l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23h86.1c13.3 0 24-10.7 24-24s-10.7-24-24-24H210l23-23c9.4-9.4 9.4-24.6 0-33.9z"})
);

export default LanTableColumnsMergePreviousRegular;
