import React from 'react';

export const LanEurozoneSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 80c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v144h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v144h176c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm272 0c0-8.8 7.2-16 16-16h208c5.7 0 11 3.1 13.9 8.1s2.8 11.1-.1 16.1L316 416h180c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c-5.7 0-11-3.1-13.9-8.1s-2.8-11.1.1-16.1L468 96H288c-8.8 0-16-7.2-16-16"})
);

export default LanEurozoneSign;
