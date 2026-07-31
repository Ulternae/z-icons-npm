import React from 'react';

export const LanClipboardMedicalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M311.4 32h8.6c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h8.6c11-19.1 31.7-32 55.4-32h128c23.7 0 44.4 12.9 55.4 32M248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-88 136v40h-40c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h40v40c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40h40c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-40v-40c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanClipboardMedicalSolid;
