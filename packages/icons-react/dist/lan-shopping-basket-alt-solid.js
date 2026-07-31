import React from 'react';

export const LanShoppingBasketAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M305.4 7.5C300.9 2.7 294.6 0 288 0s-12.9 2.7-17.4 7.5l-144 152-.5.5H48c-17.7 0-32 14.3-32 32 0 14.5 9.6 26.7 22.8 30.7l46 207.2c6.5 29.3 32.5 50.1 62.5 50.1h281.3c30 0 56-20.8 62.5-50.1l46.1-207.2c13.2-3.9 22.8-16.2 22.8-30.7 0-17.7-14.3-32-32-32h-78.1l-.5-.5zM383.8 160H192.2L288 58.9zM128 264a24 24 0 1 1 48 0 24 24 0 1 1-48 0m296-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanShoppingBasketAltSolid;
