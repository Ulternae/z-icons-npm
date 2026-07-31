import React from 'react';

export const LanWashingMachineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 104a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m130.6 191.7c-3.5.2-7 .3-10.6.3-64 0-96-64-160-64-3.5 0-7.1.2-10.7.4C146.4 218.9 182 192 224 192c53 0 96 43 96 96 0 11.1-1.9 21.8-5.4 31.7M368 288a144 144 0 1 0-288 0 144 144 0 1 0 288 0"})
);

export default LanWashingMachineRegular;
