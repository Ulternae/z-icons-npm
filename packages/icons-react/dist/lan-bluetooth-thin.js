import React from 'react';

export const LanBluetoothThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M156.6.7c2.8-1.3 6.1-.9 8.5 1.1l152 128c1.8 1.5 2.9 3.8 2.8 6.2s-1.2 4.7-3 6.2L170.3 258.1l146.8 119.7c1.9 1.5 3 3.8 2.9 6.3s-1.1 4.7-3 6.2l-152 120c-2.4 1.9-5.7 2.3-8.4.9s-4.5-4.1-4.5-7.2V272.5l-139 109.8c-3.6 2.7-8.6 2.1-11.4-1.3s-2.1-8.5 1.3-11.3l141.7-111.8L2.9 142.2c-3.4-2.8-3.9-7.8-1.1-11.3s7.8-3.9 11.3-1.1L152 243.1V8c0-3.1 1.8-5.9 4.6-7.3M168 276.9v210.6l131.2-103.6zm0-37.4 131.3-103.7L168 25.2z"})
);

export default LanBluetoothThin;
