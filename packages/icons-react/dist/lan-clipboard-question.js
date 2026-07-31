import React from 'react';

export const LanClipboardQuestion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 80h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24m0 32c-28.2 0-51.6-20.9-55.4-48H64c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16.6c-3.9 27.1-27.2 48-55.4 48zM248 0c22.3 0 41.6 13.1 50.6 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h21.4c9-18.9 28.3-32 50.6-32zm-56 208c-20.6 0-37.2 16.7-37.2 37.2 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-38.2 31-69.2 69.2-69.2s69.2 31 69.2 69.2c0 35.8-24.3 53.7-42.1 61.7-7.8 3.5-11.1 9.2-11.1 13.1 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-20.8 15.3-35.7 30.1-42.3 12.2-5.4 23.2-14.7 23.2-32.5 0-20.6-16.7-37.2-37.2-37.2zm-20 176a20 20 0 1 1 40 0 20 20 0 1 1-40 0"})
);

export default LanClipboardQuestion;
