import React from 'react';

export const LanTableCellsSplitRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c33.1 0 60.4 25.2 63.7 57.5l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64zM48 416c0 8.8 7.2 16 16 16h136v-80H48zm200 16h136c8.8 0 16-7.2 16-16v-64H248zM144 304h56v-96h-56zm208 0h48v-96h-48zm-104 0h56v-96h-56zm-200 0h48v-96H48zM64 80c-8.8 0-16 7.2-16 16v64h152V80zm184 80h152V96c0-8.8-7.2-16-16-16H248z"})
);

export default LanTableCellsSplitRegular;
