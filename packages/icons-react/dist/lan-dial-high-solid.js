import React from 'react';

export const LanDialHighSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m.4 127.6c80.2 0 146.6 59 158.2 136H288.4c-13.3 0-24 10.7-24 24s10.7 24 24 24h158.2c-11.6 77-78 136-158.2 136-88.4 0-160-71.6-160-160s71.6-160 160-160M512 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDialHighSolid;
