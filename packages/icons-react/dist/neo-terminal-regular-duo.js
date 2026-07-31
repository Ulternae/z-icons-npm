import React from 'react';

export const NeoTerminalRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 448c-15.5 0-28 12.5-28 28s12.5 28 28 28h308c15.5 0 28-12.5 28-28s-12.5-28-28-28zM10.7 106C-1.5 96.5-3.6 78.9 6 66.7S33.1 52.4 45.3 62c64.6 51 120.6 119.2 158.4 191.9 4.3 8.3 6.3 17.3 6.3 26.2s-2 17.9-6.3 26.2C165.9 378.8 109.9 447 45.3 498c-12.2 9.6-29.8 7.5-39.3-4.7s-7.4-29.8 4.7-39.3C69.1 407.6 119.8 345.9 154 280c-34.2-65.9-84.9-127.6-143.3-174"})
);

export default NeoTerminalRegularDuo;
