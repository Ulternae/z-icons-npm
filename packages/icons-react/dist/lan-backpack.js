import React from 'react';

export const LanBackpack = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32h64c8.8 0 16 7.2 16 16v32h-96V48c0-8.8 7.2-16 16-16m-48 16v32h-16C57.3 80 0 137.3 0 208v240c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128h-16V48c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48m176 64c53 0 96 43 96 96v240c0 17.7-14.3 32-32 32h-32V320c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64v160H64c-17.7 0-32-14.3-32-32V208c0-53 43-96 96-96zm0 368H128V320c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32zM144 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanBackpack;
