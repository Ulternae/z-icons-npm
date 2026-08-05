import React from 'react';

export function LanCodePullRequestRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M321 7c9.4 9.4 9.4 24.6 0 33.9l-15 15h46.1c48.6 0 88 39.4 88 88v211.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3L392 144c0-22.1-17.9-40-40-40h-46.1l15 15c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L231 97c-9.4-9.4-9.4-24.6 0-33.9L287 7c9.4-9.4 24.6-9.4 33.9 0zM128 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-8 76.3v199.3c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V156.3C39.5 146.1 16 115.8 16 80 16 35.8 51.8 0 96 0s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3m8 275.7a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanCodePullRequestRegular;
