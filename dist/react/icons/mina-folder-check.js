import React from 'react';

export const MinaFolderCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}), React.createElement('path', {"d":"m10.258 13.242 1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"})
);

export default MinaFolderCheck;
