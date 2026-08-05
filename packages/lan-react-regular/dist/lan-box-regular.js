import React from 'react';

export function LanBoxRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 176v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V176zm-11-48H248V64h87.1c5.2 0 10 2.5 13 6.7zm-189 0H59l40.9-57.3c3-4.2 7.9-6.7 13-6.7H200zM11.9 111.3C4.2 122.2 0 135.2 0 148.5V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V148.5c0-13.3-4.2-26.3-11.9-37.2l-49-68.5c-12-16.8-31.4-26.8-52-26.8H112.9c-20.6 0-40 10-52 26.8z"})
  );
}

export default LanBoxRegular;
