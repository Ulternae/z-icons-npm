import React from 'react';

export function LanSquareBRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 72c0-13.3 10.7-24 24-24h68c37.6 0 68 30.4 68 68 0 12.7-3.5 24.7-9.6 34.8C310 259.3 320 278.4 320 300c0 37.6-30.4 68-68 68h-84c-13.3 0-24-10.7-24-24zm112 44c0-11-9-20-20-20h-44v40h44c11 0 20-9 20-20m-64 108h60c11 0 20-9 20-20s-9-20-20-20h-60z"})
  );
}

export default LanSquareBRegular;
