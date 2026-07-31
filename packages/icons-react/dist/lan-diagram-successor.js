import React from 'react';

export const LanDiagramSuccessor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M292.7 132.7c6.2-6.2 16.4-6.2 22.6 0l36.7 36.7V96c0-17.7-14.3-32-32-32H215.4c5.4 9.4 8.6 20.3 8.6 32v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v73.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6M416 352c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zm32 64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zM192 160V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32M96 368h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanDiagramSuccessor;
