import React from 'react';

export const LanCardDiamondSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm180.7 84.7-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0"})
);

export default LanCardDiamondSolid;
