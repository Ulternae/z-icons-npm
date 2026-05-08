import React from 'react';

export const MinaContactlessCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8 9.99c.147.646.225 1.319.225 2.01A9 9 0 0 1 8 14.01m2.975-5.59a13 13 0 0 1 .5 3.58 13 13 0 0 1-.5 3.58m3.25-8.72c.513 1.621.79 3.348.79 5.14s-.277 3.519-.79 5.14"}), React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaContactlessCircle;
