import React from 'react';

export function LanFileDashedLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 48H160c-8.8 0-16 7.2-16 16v176H96V64c0-35.3 28.7-64 64-64h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v53.5h-48v-32h-88c-39.8 0-72-32.2-72-72v-88zM96 384h48v64c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm316.1-224L320 67.9V136c0 13.3 10.7 24 24 24zM24 288h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m208 0h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H232c-13.3 0-24-10.7-24-24s10.7-24 24-24m208 0h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanFileDashedLineRegular;
