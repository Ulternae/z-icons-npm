import React from 'react';

export const LanScannerImageThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M43.7 32.9c-3.9-2-8.8-.5-10.8 3.4s-.5 8.8 3.4 10.8L503.9 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-65c0-27-15.1-51.7-39-64zM560 352v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48m-352 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0M96 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanScannerImageThin;
