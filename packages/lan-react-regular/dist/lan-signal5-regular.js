import React from 'react';

export function LanSignal5Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M488 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24zm-128 72c-13.3 0-24 10.7-24 24v304c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m-80 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24zm-128 72c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24M48 384c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24"})
  );
}

export default LanSignal5Regular;
