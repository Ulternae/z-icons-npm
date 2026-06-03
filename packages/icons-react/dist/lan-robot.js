import React from 'react';

export const LanRobot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H160c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c53 0 96-43 96-96V160c0-53-43-96-96-96H304zM288 96h128c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM160 368c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m96 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m96 0c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16M240 240a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m160 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64-32a64 64 0 1 0 128 0 64 64 0 1 0-128 0M32 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm528-16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16"})
);

export default LanRobot;
