import React from 'react';

export const LanFileExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.5 0c17 0 33.2 6.8 45.2 18.8l122.6 122.4c12 12 18.7 28.3 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V208h-88c-39.8 0-72-32.2-72-72V48zm128 328c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m0-144c18.6 0 33 16.1 31 34.6l-7.1 64.1c-1.4 12.1-11.7 21.3-23.9 21.3s-22.5-9.2-23.8-21.3l-7.2-64.1c-2-18.5 12.4-34.6 31-34.6m32-96c0 13.3 10.7 24 24 24h68.1L224 67.9z"})
);

export default LanFileExclamationRegular;
