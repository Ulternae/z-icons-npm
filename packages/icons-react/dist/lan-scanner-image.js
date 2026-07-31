import React from 'react';

export const LanScannerImage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M55.2 33.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5L492.2 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-72.4c0-30.3-17.1-58-44.2-71.6zM544 352v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32m-440 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanScannerImage;
