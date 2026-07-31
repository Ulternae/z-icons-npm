import React from 'react';

export const LanFighterJet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-51.8l139.1 160h83.9c15.5 0 30.9 2.5 45.5 7.4l61.1 20.4C565.5 225 576 239.6 576 256s-10.5 31-26.1 36.2l-61.1 20.4c-14.7 4.9-30.1 7.4-45.5 7.4h-83.7L226.3 480h45.8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V320h-25.4l-43.3 43.3c-3 3-7.1 4.7-11.3 4.7h-64c-8.8 0-16-7.2-16-16L0 160c0-8.8 7.2-16 16-16h64c4.2 0 8.3 1.7 11.3 4.7l43.3 43.3H160V32h-16c-8.8 0-16-7.2-16-16m64 176h124.9L192 48.4zm0 128v151l125.8-151zM32 272v64h41.4l43.3-43.3c3-3 7.1-4.7 11.3-4.7h315.2c12 0 24-1.9 35.4-5.7l61.1-20.4c2.5-.8 4.2-3.2 4.2-5.9s-1.7-5-4.2-5.9l-61.1-20.4c-11.4-3.8-23.4-5.7-35.4-5.7H128c-4.2 0-8.3-1.7-11.3-4.7L73.4 176H32v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanFighterJet;
