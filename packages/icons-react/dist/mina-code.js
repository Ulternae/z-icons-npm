import React from 'react';

export const MinaCode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m17.09 7.974.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"})
);

export default MinaCode;
