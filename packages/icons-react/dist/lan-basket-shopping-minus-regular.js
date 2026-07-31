import React from 'react';

export const LanBasketShoppingMinusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M142 192h349.6l-47.9 227.3c-1.6 7.4-8.1 12.7-15.7 12.7H147.9c-7.6 0-14.1-5.3-15.7-12.7L84.4 192zm226.1-48H208l45.2-48 1.9-2 33-35 33 35 1.9 2 45.2 48zm167.9 0H434c-12.5-13.3-49.5-52.6-111.1-117.9L305.5 7.5C300.9 2.7 294.6 0 288 0s-12.9 2.7-17.5 7.5Q268.7 9.45 173 111l-31 33H40c-13.3 0-24 10.7-24 24 0 11.6 8.3 21.3 19.3 23.5l50 237.6c6.2 29.6 32.4 50.8 62.6 50.8H428c30.3 0 56.4-21.2 62.6-50.8l50-237.6c11-2.2 19.3-11.9 19.3-23.5 0-13.3-10.7-24-24-24zM216 280c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanBasketShoppingMinusRegular;
