import React from 'react';

export const LanConveyorBeltEmptyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 336c-44.2 0-80 35.8-80 80s35.8 80 80 80h448c44.2 0 80-35.8 80-80s-35.8-80-80-80zM0 416c0-53 43-96 96-96h448c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96m144 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m208 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanConveyorBeltEmptyThin;
