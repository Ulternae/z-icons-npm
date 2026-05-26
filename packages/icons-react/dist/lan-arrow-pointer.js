import React from 'react';

export const LanArrowPointer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M220 255.9c-10.1 0-19.6 4.7-25.6 12.8L96 399.9v-360l288 215.9H220zM102.4 4.8c-7.3-5.5-17-6.3-25.1-2.3S64 14.9 64 24v400c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.4l102.1-136.1 100.4 200.9c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5L238 288h170.2c10.3 0 19.5-6.6 22.8-16.4s-.1-20.6-8.4-26.8z"})
);

export default LanArrowPointer;
