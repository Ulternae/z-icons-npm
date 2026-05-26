import React from 'react';

export const LanClipboardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 96h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24m0 48c37.1 0 67.6-28 71.6-64H320c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h16.4c4 36 34.5 64 71.6 64zm59.9-112C279 12.7 257 0 232 0h-80c-25 0-47 12.7-59.9 32H64C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
);

export default LanClipboardRegular;
