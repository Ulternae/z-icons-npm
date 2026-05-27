import React from 'react';

export const NeoBlockQuote = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M168 56c-15.5 0-28 12.5-28 28s12.5 28 28 28h308c15.5 0 28-12.5 28-28s-12.5-28-28-28zm0 196c-15.5 0-28 12.5-28 28s12.5 28 28 28h308c15.5 0 28-12.5 28-28s-12.5-28-28-28zm0 196c-15.5 0-28 12.5-28 28s12.5 28 28 28h308c15.5 0 28-12.5 28-28s-12.5-28-28-28zM.2 59.1c-1.7-15.4 9.3-29.2 24.7-30.9s29.2 9.4 30.9 24.7C64.1 128.2 70 204.3 70 280s-5.9 151.8-14.2 227.1c-1.7 15.4-15.6 26.4-30.9 24.7S-1.5 516.3.2 500.9C8.2 427.7 14 353.7 14 280S8.2 132.3.2 59.1"})
);

export default NeoBlockQuote;
