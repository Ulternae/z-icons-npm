import React from 'react';

export const LanUtilityPole = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H112V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32V48c0-8.8-7.2-16-16-16S0 39.2 0 48v64c0 8.8 7.2 16 16 16h42.4L240 271.7V496c0 8.8 7.2 16 16 16s16-7.2 16-16V271.7L453.6 128H496c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H272zm130 112L272 230.9V128zM240 230.9 110 128h130z"})
);

export default LanUtilityPole;
