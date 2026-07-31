import React from 'react';

export const LanConveyorBeltAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 48v160H112V48zM112 0C85.5 0 64 21.5 64 48v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm416 112v96h-96v-96zm-96-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zm160 352c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48s21.5-48 48-48h448c26.5 0 48 21.5 48 48M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm64 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanConveyorBeltAltRegular;
