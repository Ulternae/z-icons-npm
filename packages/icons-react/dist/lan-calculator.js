import React from 'react';

export const LanCalculator = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 160v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160zm0-32H32V64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zm32 0V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zM72 224a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72-72a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72-72a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 120c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24M80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCalculator;
