import React from 'react';

export const MinaBrandGitlab = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.981 21 21 13.708 18.498 3l-3.015 6.497H8.997L5.507 3 3 13.708z"})
);

export default MinaBrandGitlab;
