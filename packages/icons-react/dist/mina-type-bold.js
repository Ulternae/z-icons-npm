import React from 'react';

export const MinaTypeBold = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5 3h8c1.06 0 2.078.474 2.828 1.318S17 6.307 17 7.5s-.421 2.338-1.172 3.182S14.061 12 13 12H5zm0 9h10.039a4.44 4.44 0 0 1 3.154 1.318A4.52 4.52 0 0 1 19.5 16.5a4.52 4.52 0 0 1-1.307 3.182A4.44 4.44 0 0 1 15.038 21H5z"})
);

export default MinaTypeBold;
