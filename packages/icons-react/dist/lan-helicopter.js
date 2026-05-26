import React from 'react';

export const LanHelicopter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h160v64H120L76.8 70.4c-3-4-7.8-6.4-12.8-6.4H16c-4.9 0-9.4 2.2-12.5 6S-.7 78.7.4 83.5l32 144C34 234.8 40.5 240 48 240h136.2l88 113.1c15.2 19.5 38.5 30.9 63.1 30.9H416c70.7 0 128-57.3 128-128s-57.3-128-128-128h-48V64h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm160 128v192h-.7c-14.8 0-28.8-6.8-37.9-18.5l-92.8-119.3c-3-3.9-7.7-6.2-12.6-6.2H60.8L35.9 96H56l43.2 57.6c3 4 7.8 6.4 12.8 6.4zm32 192V160h48c53 0 96 43 96 96s-43 96-96 96zm192 64c-8.8 0-16 7.2-16 16s-7.2 16-16 16H240c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16"})
);

export default LanHelicopter;
