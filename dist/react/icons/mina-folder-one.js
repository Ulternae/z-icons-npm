import React from 'react';

export const MinaFolderOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.661 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m8.661 0a2 2 0 0 1-1.322-.5l-2.272-2A2 2 0 0 0 6.745 4H5a2 2 0 0 0-2 2v1m8.661 0H3"})
);

export default MinaFolderOne;
