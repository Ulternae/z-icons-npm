import React from 'react';

export const LanClipboardMedicalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 96h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24m0 48c-37.1 0-67.6-28-71.6-64H64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-16.4c-4 36-34.5 64-71.6 64zM232 0c25 0 47 12.7 59.9 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h28.1C105 12.7 127 0 152 0zm-72 232c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v40h40c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-40v40c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-40h-40c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h40z"})
);

export default LanClipboardMedicalRegular;
