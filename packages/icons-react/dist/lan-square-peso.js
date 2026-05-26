import React from 'react';

export const LanSquarePeso = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m0-32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 112v40h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v104c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c38.7 0 72.1-23 87.3-56H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16.3c.2-2.6.3-5.3.3-8s-.1-5.4-.3-8H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24.7c-15.2-33-48.5-56-87.3-56h-64c-8.8 0-16 7.2-16 16m80 16c20.2 0 38.2 9.4 50 24h-98v-24zm-48 72v-16h111.5c.3 2.6.5 5.3.5 8s-.2 5.4-.5 8zm0 32h98c-11.7 14.6-29.7 24-50 24h-48z"})
);

export default LanSquarePeso;
