import React from 'react';

export function LanTableLayoutRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v64H48V96c0-8.8 7.2-16 16-16zM0 160v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm400 256c0 8.8-7.2 16-16 16H160V208h240zm-288 16H64c-8.8 0-16-7.2-16-16V208h64z"})
  );
}

export default LanTableLayoutRegular;
