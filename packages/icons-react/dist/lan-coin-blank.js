import React from 'react';

export const LanCoinBlank = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 332.7c33.3 10.8 71.4 17.6 112 19v64c-41.7-1.4-79.9-8.1-112-18.3zm-96-55c16.2 16.5 38.1 30.9 64 42.6V385c-2.3-1.1-4.5-2.1-6.7-3.2C46.4 360.3 32 336.6 32 319.9zM256 64C114.6 64 0 128.5 0 208v112c0 70.7 114.6 128 256 128s256-57.3 256-128V208c0-79.5-114.6-144-256-144m160 256.4c25.9-11.7 47.8-26.2 64-42.6V320c0 16.7-14.4 40.4-57.3 61.9-2.2 1.1-4.4 2.2-6.7 3.2zm-144 31.3c40.6-1.4 78.7-8.2 112-19v64.7c-32.1 10.3-70.3 16.9-112 18.3zM32 208c0-61.9 100.3-112 224-112s224 50.1 224 112-100.3 112-224 112S32 269.9 32 208"})
);

export default LanCoinBlank;
