import React from 'react';

export function CoreVoicemailSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M263.8 320c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.7z"})
  );
}

export default CoreVoicemailSolid;
