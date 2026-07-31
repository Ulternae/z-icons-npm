import React from 'react';

export const LanTowerControl = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h192c5 0 9.8 2.4 12.8 6.4s4 9.2 2.6 14L389.2 320H400c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v160h-32V352H96v160H64V352H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h10.8L.6 116.4c-1.4-4.8-.4-10 2.6-14S11 96 16 96h192V32h-48c-8.8 0-16-7.2-16-16m211.9 304 54.9-192H320v192zm-67.9 0V128H160v192zm-160 0V128H37.2l54.9 192z"})
);

export default LanTowerControl;
