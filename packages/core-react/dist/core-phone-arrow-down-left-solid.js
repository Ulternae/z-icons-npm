import React from 'react';

export function CorePhoneArrowDownLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.104 -7.6 519.704 519.904',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M83 29.3c25-25 65.5-25 90.5 0L227 82.7c25 25 25 65.5 0 90.5l-49.4 49.4c-.8.8-1.1 2-.8 3.2 14.6 53.4 56.3 95.1 109.7 109.7 1.1.3 2.3 0 3.2-.8l49.3-49.4c25-25 65.5-25 90.5 0l53.5 53.4c25 25 25 65.5 0 90.5l-26.9 26.9c-45 45-109.6 64.7-172 52.8C142.2 481.9 30.3 370 3.3 228.1c-11.9-62.4 7.8-127 52.8-172zM519.5 32l-19.8 19.8L387.5 164h88.4v56h-156c-7.4 0-14.6-2.9-19.8-8.2S292 199.4 292 192V36h56v88.4L460.2 12.2 480-7.6 519.6 32z"})
  );
}

export default CorePhoneArrowDownLeftSolid;
