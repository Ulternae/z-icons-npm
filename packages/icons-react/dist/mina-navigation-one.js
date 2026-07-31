import React from 'react';

export const MinaNavigationOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M3.414 12.086a.546.546 0 0 1-.101-1.024l16.905-8.007a.546.546 0 0 1 .727.727l-8.007 16.905a.546.546 0 0 1-1.024-.1l-1.62-6.483a.55.55 0 0 0-.398-.397z"})
);

export default MinaNavigationOne;
