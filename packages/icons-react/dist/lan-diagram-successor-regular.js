import React from 'react';

export const LanDiagramSuccessorRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M295 127c9.4-9.4 24.6-9.4 33.9 0l15 15v-38.1c0-13.3-10.7-24-24-24h-98c1.3 5.1 2 10.5 2 16v64c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64h256c39.8 0 72 32.2 72 72v38.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-56 56c-9.4 9.4-24.6 9.4-33.9 0l-56-56c-9.4-9.4-9.4-24.6 0-33.9zm105 209c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm48 80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-80c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zM176 96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16zm-64 264h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanDiagramSuccessorRegular;
