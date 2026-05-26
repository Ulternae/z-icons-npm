import React from 'react';

export const LanCheckToSlotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M568 288c4.4 0 8 3.6 8 8v128c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V296c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 22.1 17.9 40 40 40h464c22.1 0 40-17.9 40-40V296c0-4.4 3.6-8 8-8M416 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm209.7 67.7c2.6-3.6 7.6-4.3 11.2-1.7s4.3 7.6 1.8 11.2L268.9 281.5c-1.4 1.9-3.6 3.1-5.9 3.3s-4.7-.7-6.3-2.4l-62.3-64.5c-3.1-3.2-3-8.2.2-11.3s8.2-3 11.3.2l55.7 57.6z"})
);

export default LanCheckToSlotThin;
