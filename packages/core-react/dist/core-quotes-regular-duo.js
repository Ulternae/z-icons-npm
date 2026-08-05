import React from 'react';

export function CoreQuotesRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 288h96v96H64zm288 0h96v96h-96z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M0 160C0 89.3 57.3 32 128 32h32v64h-32c-35.3 0-64 28.7-64 64v64h96c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 160v64h96v-96H64zm288-32v96h96v-96zm0-64h96c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64V160c0-70.7 57.3-128 128-128h32v64h-32c-35.3 0-64 28.7-64 64z"})
  );
}

export default CoreQuotesRegularDuo;
