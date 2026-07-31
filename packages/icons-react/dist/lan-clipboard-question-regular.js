import React from 'react';

export const LanClipboardQuestionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 96h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24m0 48c-37.1 0-67.6-28-71.6-64H64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-16.4c-4 36-34.5 64-71.6 64zM232 0c25 0 47 12.7 59.9 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h28.1C105 12.7 127 0 152 0zm-40 232c-16.1 0-29.2 13.1-29.2 29.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-42.6 34.6-77.2 77.2-77.2s77.2 34.6 77.2 77.2c0 45.5-34.5 64.7-53.7 71.8-2.3 10.8-11.9 19-23.5 19-13.3 0-24-10.7-24-24 0-20.2 14.6-34.6 29.5-39.5 6-2 12.3-5.1 16.8-9.5 3.9-3.8 6.9-9 6.9-17.7 0-16.1-13.1-29.2-29.2-29.2zm28 168c0 15.5-12.5 28-28 28s-28-12.5-28-28 12.5-28 28-28 28 12.5 28 28"})
);

export default LanClipboardQuestionRegular;
