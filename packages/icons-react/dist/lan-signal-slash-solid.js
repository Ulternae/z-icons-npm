import React from 'react';

export const LanSignalSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v350.2l-56-56V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v150.2l-327-327zm271 406.7-48-48V456c0 13.3 10.7 24 24 24s24-10.7 24-24zM184 320c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24M80 384c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24"})
);

export default LanSignalSlashSolid;
