import React from 'react';

export const MinaTypeUnderline = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6 3v7.539c0 1.713.632 3.357 1.757 4.569S10.41 17 12 17s3.117-.68 4.243-1.892C17.368 13.896 18 12.252 18 10.538V3M4 21h16"})
);

export default MinaTypeUnderline;
