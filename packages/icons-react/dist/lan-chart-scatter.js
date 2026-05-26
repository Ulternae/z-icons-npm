import React from 'react';

export const LanChartScatter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm160 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m56-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0M160 344a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanChartScatter;
