import React from 'react';

export const LanTurntableSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm160 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320m264 16c13.3 0 24 10.7 24 24v143.8c0 9.4-2.4 18.6-6.8 26.8l-44.1 80.8c-6.3 11.6-20.9 15.9-32.6 9.6s-15.9-20.9-9.6-32.6l44.1-80.7c.6-1.2 1-2.5 1-3.8V136c0-13.3 10.7-24 24-24M224 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanTurntableSolid;
