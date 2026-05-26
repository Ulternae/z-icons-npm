import React from 'react';

export const LanConveyorBeltEmpty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 352c-35.3 0-64 28.7-64 64s28.7 64 64 64h448c35.3 0 64-28.7 64-64s-28.7-64-64-64zM0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m128-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanConveyorBeltEmpty;
