import React from 'react';

export const LanSignalAlt4 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16zm-154.7 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16M170.7 272c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16zM32 400c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanSignalAlt4;
