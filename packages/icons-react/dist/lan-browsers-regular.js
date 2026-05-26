import React from 'react';

export const LanBrowsersRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 32h336c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm352 160H144v128c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16zM24 128c13.3 0 24 10.7 24 24v264c0 8.8 7.2 16 16 16h392c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V152c0-13.3 10.7-24 24-24m200-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanBrowsersRegular;
