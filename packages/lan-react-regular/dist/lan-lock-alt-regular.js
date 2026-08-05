import React from 'react';

export function LanLockAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 16c44.2 0 80 35.8 80 80v64H112V96c0-44.2 35.8-80 80-80M64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64V96c0-70.7-57.3-128-128-128S64 25.3 64 96m208 112h48c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16zm-56 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanLockAltRegular;
