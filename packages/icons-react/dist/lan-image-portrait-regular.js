import React from 'react';

export const LanImagePortraitRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 368c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80m112-120a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanImagePortraitRegular;
