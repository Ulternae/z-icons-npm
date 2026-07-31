import React from 'react';

export const LanClipboardPrescriptionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M311.4 32h8.6c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h8.6c11-19.1 31.7-32 55.4-32h128c23.7 0 44.4 12.9 55.4 32M248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-144 80c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h22.5l58.4 55-33.4 31.6c-9.6 9.1-10.1 24.3-.9 33.9s24.3 10.1 33.9.9l35.4-33.5 35.6 33.5c9.7 9.1 24.8 8.6 33.9-1s8.6-24.8-1-33.9l-33.6-31.6 33.6-31.8c9.6-9.1 10.1-24.3.9-33.9s-24.3-10.1-33.9-.9L243.7 342l-40.9-38.5c12.9-11.7 21.1-28.6 21.1-47.5 0-35.3-28.7-64-64-64h-56zm32 80h-8v-32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanClipboardPrescriptionSolid;
