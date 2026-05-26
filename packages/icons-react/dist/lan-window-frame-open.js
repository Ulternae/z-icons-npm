import React from 'react';

export const LanWindowFrameOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 32h112c17.7 0 32 14.3 32 32v192H240zm176 256V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224zm-208-32H64V64c0-17.7 14.3-32 32-32h112zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V336h-32v144H64V336H32v144z"})
);

export default LanWindowFrameOpen;
