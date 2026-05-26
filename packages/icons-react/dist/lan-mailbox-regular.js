import React from 'react';

export const LanMailboxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M251.3 112c22.8 25.5 36.7 59.1 36.7 96v208c0 5.5-.7 10.9-2 16h226c8.8 0 16-7.2 16-16V224c0-61.9-50.1-112-112-112zM144 112c-53 0-96 43-96 96v208c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V208c0-53-43-96-96-96m0-48h272c88.4 0 160 71.6 160 160v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64m-40 144h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m232 24c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-40h-24c-13.3 0-24-10.7-24-24"})
);

export default LanMailboxRegular;
