import React from 'react';

export const LanArrowsToDotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v86.1l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V24zm153 321c9.4-9.4 9.4-24.6 0-33.9l-31-31h86.1c13.3 0 24-10.7 24-24s-10.7-24-24-24H402l31-31c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0zm-145-89a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-175-89c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h86.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72zm54 266c9.4 9.4 24.6 9.4 33.9 0l31-31v86.1c0 13.3 10.7 24 24 24s24-10.7 24-24V402l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9z"})
);

export default LanArrowsToDotRegular;
