import React from 'react';

export const LanChessBoard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM32 393.2V416c0 17.7 14.3 32 32 32h22.8v-54.8zm82.3 0V448h54.8v-54.8zm82.3 0V448h54.9v-54.8zm82.3 0V448h54.8v-54.8zm82.3 0V448H384c17.7 0 32-14.3 32-32v-22.8zM32 365.7h54.8v-54.8H32zm82.3 0h54.8v-54.8h-54.8zm82.3 0h54.9v-54.8h-54.9zm82.3 0h54.8v-54.8h-54.8zm82.3 0H416v-54.8h-54.8zM32 283.4h54.8v-54.9H32zm82.3 0h54.8v-54.9h-54.8zm82.3 0h54.9v-54.9h-54.9zm82.3 0h54.8v-54.9h-54.8zm82.3 0H416v-54.9h-54.8zM32 201.1h54.8v-54.8H32zm82.3 0h54.8v-54.8h-54.8zm82.3 0h54.9v-54.8h-54.9zm82.3 0h54.8v-54.8h-54.8zm82.3 0H416v-54.8h-54.8zM64 64c-17.7 0-32 14.3-32 32v22.8h54.8V64zm50.3 54.8h54.8V64h-54.8zm82.3 0h54.9V64h-54.9zm82.3 0h54.8V64h-54.8zm82.3 0H416V96c0-17.7-14.3-32-32-32h-22.8z"})
);

export default LanChessBoard;
