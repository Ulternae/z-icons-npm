import React from 'react';

export const LanSortSizeDownAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m233 385-88 88c-9.4 9.4-24.6 9.4-33.9 0L23 385c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47V56c0-13.3 10.7-24 24-24s24 10.7 24 24v342.1l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm103-241h64V80h-64zm-48 0V80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48m48 288h128V304H336zm-48 0V304c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48"})
);

export default LanSortSizeDownAltRegular;
