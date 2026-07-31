import React from 'react';

export const LanBarProgressEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 144c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressEmptyRegular;
