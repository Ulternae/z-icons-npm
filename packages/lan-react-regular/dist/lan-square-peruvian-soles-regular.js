import React from 'react';

export function LanSquarePeruvianSolesRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm240.9 57.4c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-64 224c-3.6 12.7-16.9 20.1-29.7 16.5s-20.1-16.9-16.5-29.7zM184 152c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24.4c-8.6 0-15.6 7-15.6 15.6 0 7.4 5.2 13.8 12.5 15.2l16.4 3.3c29.7 5.9 51.1 32 51.1 62.3 0 35.1-28.5 63.6-63.6 63.6H128c-13.3 0-24-10.7-24-24s10.7-24 24-24h32.4c8.6 0 15.6-7 15.6-15.6 0-7.4-5.2-13.8-12.5-15.3l-16.4-3.3c-29.7-5.9-51.1-32-51.1-62.3 0-35.1 28.5-63.6 63.6-63.6H184z"})
  );
}

export default LanSquarePeruvianSolesRegular;
