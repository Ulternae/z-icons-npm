import React from 'react';

export const LanClipboardPrescriptionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 96h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24m0 48c-37.1 0-67.6-28-71.6-64H64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-16.4c-4 36-34.5 64-71.6 64zM232 0c25 0 47 12.7 59.9 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h28.1C105 12.7 127 0 152 0zM120 192h56c35.3 0 64 28.7 64 64 0 17.9-7.3 34.1-19.2 45.7l17.8 15.3 25.3-22.8c9.9-8.9 25-8.1 33.9 1.8s8.1 25-1.8 33.9l-20.7 18.6 20.2 17.3c10.1 8.6 11.2 23.8 2.6 33.8s-23.8 11.2-33.8 2.6l-25-21.4-23.4 21c-9.9 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9l18.7-16.8-34.2-29.3h-24.5v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V216c0-13.3 10.7-24 24-24zm63.8 78c4.9-2.7 8.2-8 8.2-14 0-8.8-7.2-16-16-16h-32v32h32c2.6 0 5-.6 7.2-1.7l.5-.5.2.2z"})
);

export default LanClipboardPrescriptionRegular;
