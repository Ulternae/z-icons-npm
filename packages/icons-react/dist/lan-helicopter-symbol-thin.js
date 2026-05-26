import React from 'react';

export const LanHelicopterSymbolThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M493.9 224H510C495.6 108.2 403.8 16.4 288 2v16.1c107 14.3 191.7 99 205.9 205.9m16.1 64h-16.1C479.7 395 395 479.6 288 493.9V510c115.8-14.4 207.6-106.2 222-222M2 288c14.4 115.8 106.2 207.6 222 222v-16.1C117.1 479.6 32.4 395 18.1 288zm0-64h16.1C32.4 117.1 117.1 32.4 224 18.1V2C108.2 16.4 16.4 108.2 2 224m166-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v224c0 4.4 3.6 8 8 8s8-3.6 8-8V264h176v104c0 4.4 3.6 8 8 8s8-3.6 8-8V144c0-4.4-3.6-8-8-8s-8 3.6-8 8v104H168z"})
);

export default LanHelicopterSymbolThin;
