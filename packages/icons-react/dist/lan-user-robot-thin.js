import React from 'react';

export const LanUserRobotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-72c-44.2 0-80 35.8-80 80v40H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v40c0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80v-40h40c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40v-40c0-44.2-35.8-80-80-80h-72zm136 136v96c0 35.3-28.7 64-64 64H144c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64M16 440c0-39.8 32.2-72 72-72h272c39.8 0 72 32.2 72 72v64c0 4.4 3.6 8 8 8s8-3.6 8-8v-64c0-48.6-39.4-88-88-88H88c-48.6 0-88 39.4-88 88v64c0 4.4 3.6 8 8 8s8-3.6 8-8zm120 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 4.4 3.6 8 8 8s8-3.6 8-8zm96 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 4.4 3.6 8 8 8s8-3.6 8-8zm96 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 4.4 3.6 8 8 8s8-3.6 8-8zM168 148a28 28 0 1 1 0 56 28 28 0 1 1 0-56m0 72a44 44 0 1 0 0-88 44 44 0 1 0 0 88m84-44a28 28 0 1 1 56 0 28 28 0 1 1-56 0m72 0a44 44 0 1 0-88 0 44 44 0 1 0 88 0"})
);

export default LanUserRobotThin;
