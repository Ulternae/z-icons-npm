import React from 'react';

export const LanBarsFilter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 80c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80m96 176c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16m224 176c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16"})
);

export default LanBarsFilter;
