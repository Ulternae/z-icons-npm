import React from 'react';

export const LanBagShoppingMinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 16c-35.3 0-64 28.7-64 64v48h128V80c0-35.3-28.7-64-64-64M48 128h64V80c0-61.9 50.1-112 112-112S336 18.1 336 80v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48m104 156c-11 0-20 9-20 20s9 20 20 20h144c11 0 20-9 20-20s-9-20-20-20z"})
);

export default LanBagShoppingMinusSolid;
