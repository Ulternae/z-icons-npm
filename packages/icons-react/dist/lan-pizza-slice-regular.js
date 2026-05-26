import React from 'react';

export const LanPizzaSliceRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M122.2 35.6.5 491.9c-1.5 5.5.1 11.4 4.1 15.4s9.9 5.6 15.4 4.1l456.4-121.6c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7.9c-22.8-1.6-41.9 14-47.5 34.7M144.6 138C264.3 152.7 359.3 247.7 374 367.4L61.2 450.8zm12.5-46.8 11.3-42.3c157.2 11.8 282.9 137.5 294.7 294.8L420.8 355C401.1 218.8 293.3 111 157.1 91.3zM192 352a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-64-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanPizzaSliceRegular;
