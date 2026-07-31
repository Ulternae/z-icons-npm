import React from 'react';

export const LanUtilityPoleDouble = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H112V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32V48c0-8.8-7.2-16-16-16S0 39.2 0 48v64c0 8.8 7.2 16 16 16h43.4L240 240.9V288H112v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16h43.4L240 432.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-63.1L452.6 320H496c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H272v-47.1L452.6 128H496c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H272zm120.2 112L272 203.1V128zM240 203.1 119.8 128H240zM392.2 320 272 395.1V320zM240 395.1 119.8 320H240z"})
);

export default LanUtilityPoleDouble;
