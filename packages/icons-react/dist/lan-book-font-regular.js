import React from 'react';

export const LanBookFontRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 88C0 39.4 39.4 0 88 0h288c39.8 0 72 32.2 72 72v256c0 25-12.7 47-32 59.9V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80zm48 344c0 17.7 14.3 32 32 32h288v-64H80c-17.7 0-32 14.3-32 32m0-73.3c9.8-4.3 20.6-6.7 32-6.7h296c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H88c-22.1 0-40 17.9-40 40zm197.5-249.4 63.8 127.6c.2.3.3.6.4.9l23.8 47.5c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-17.4-34.7h-98.3l-17.4 34.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l23.8-47.5c.1-.3.3-.6.4-.9l63.8-127.6c4-8.2 12.3-13.3 21.4-13.3s17.4 5.1 21.5 13.3M224 173.7 198.8 224h50.3l-25.2-50.3z"})
);

export default LanBookFontRegular;
