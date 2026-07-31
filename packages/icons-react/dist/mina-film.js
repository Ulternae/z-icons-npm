import React from 'react';

export const MinaFilm = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.4 3.468v17.064m9-17.064v17.064M7.401 7.473H3.486M7.401 12H3.027m4.374 4.473H3.432m17.469-9h-3.915M20.901 12h-4.374m-.054 0h-9.9m14.328 4.473h-3.969M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"})
);

export default MinaFilm;
