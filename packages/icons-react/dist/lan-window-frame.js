import React from 'react';

export const LanWindowFrame = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 0c35.3 0 64 28.7 64 64v416h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V64C32 28.7 60.7 0 96 0zM64 240h144V32H96c-17.7 0-32 14.3-32 32zm0 32v208h144V272zm176 0v208h144V272zm144-32V64c0-17.7-14.3-32-32-32H240v208z"})
);

export default LanWindowFrame;
