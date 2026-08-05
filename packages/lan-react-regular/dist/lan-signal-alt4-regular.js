import React from 'react';

export function LanSignalAlt4Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M440 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24zm-152 72c-13.3 0-24 10.7-24 24v304c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24M184 280c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24zM56 408c0-13.3-10.7-24-24-24S8 394.7 8 408v48c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanSignalAlt4Regular;
