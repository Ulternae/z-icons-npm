import React from 'react';

export const LanToriiGate = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24.2 18.3c-4.9-3-11.1-3-16.1-.2S0 26.2 0 32v80c0 38.7 27.5 71 64 78.4V256H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v208c0 8.8 7.2 16 16 16s16-7.2 16-16V288h256v208c0 8.8 7.2 16 16 16s16-7.2 16-16V288h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-65.6c36.5-7.4 64-39.7 64-78.4V32c0-5.8-3.1-11.1-8.1-13.9s-11.2-2.8-16.1.2L359 57.2c-7.5 4.5-16 6.8-24.7 6.8H113.7c-8.7 0-17.2-2.4-24.7-6.8zM352 192v64H240v-64zm-144 0v64H96v-64zM32 112V60.3l40.6 24.3C85 92.1 99.2 96 113.7 96h220.5c14.5 0 28.7-3.9 41.2-11.4L416 60.3V112c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48"})
);

export default LanToriiGate;
