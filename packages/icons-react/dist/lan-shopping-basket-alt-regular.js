import React from 'react';

export const LanShoppingBasketAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M162.7 192H84.4l47.9 227.3c1.6 7.4 8.1 12.7 15.7 12.7h280.1c7.6 0 14.1-5.3 15.7-12.7L491.7 192H162.8zm160.1-96-1.9-2-33-35-33 35-1.9 2-45.2 48h160.1l-45.2-48zM434 144h102c13.3 0 24 10.7 24 24 0 11.6-8.3 21.3-19.3 23.5l-50 237.6c-6.2 29.6-32.4 50.8-62.6 50.8H148c-30.3 0-56.4-21.2-62.6-50.8l-50-237.6c-11-2.2-19.3-11.9-19.3-23.5 0-13.3 10.7-24 24-24h102c12.5-13.3 49.5-52.6 111.1-117.9l17.3-18.6C275.1 2.7 281.4 0 288 0s12.9 2.7 17.5 7.5Q307.3 9.45 403 111zM144 264a24 24 0 1 1 48 0 24 24 0 1 1-48 0m264-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanShoppingBasketAltRegular;
