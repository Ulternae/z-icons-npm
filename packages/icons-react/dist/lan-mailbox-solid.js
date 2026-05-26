import React from 'react';

export const LanMailboxSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 208c0-53-43-96-96-96s-96 43-96 96v208c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16zM0 208C0 128.5 64.5 64 144 64h272c88.4 0 160 71.6 160 160v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24m264-24c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v40c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24z"})
);

export default LanMailboxSolid;
