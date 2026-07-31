import React from 'react';

export const MinaShrub = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m11.993 15.796 2.598-2.352m-4.162.782 1.564.782V20.5m6.053-10.398c2.02-3.249-2.817-7.978-6.053-5.357-3.07-2.482-8.177-1.031-6.052 2.392-4.389 2.539-.505 11.018 3.454 11.017h5.196c3.91-.1 7.896-5.482 3.455-8.052"})
);

export default MinaShrub;
