import React from 'react';

export const LanTableRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64l-6.5-.3C25.2 476.4 0 449.1 0 416V96c0-35.3 28.7-64 64-64zM48 312v104c0 8.8 7.2 16 16 16h136V312zm200 0v120h136c8.8 0 16-7.2 16-16V312zM48 264h152V160H48zm200 0h152V160H248z"})
);

export default LanTableRegular;
