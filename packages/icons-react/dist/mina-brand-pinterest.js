import React from 'react';

export const MinaBrandPinterest = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement('path', {"d":"M7.452 13.18c-1.108-2.262.4-6.668 5.472-5.948 5.586.794 4.581 9.478-.077 9.138-1.474-.107-2.031-1.328-2.177-2.576m0 0c-.11-.946.016-1.907.16-2.41.244-.857.649-.74.353.393-.144.552-.32 1.245-.513 2.017m0 0c-.514 2.06-1.15 4.685-1.63 6.708"})
);

export default MinaBrandPinterest;
