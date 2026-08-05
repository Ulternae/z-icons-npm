import React from 'react';

export function LanCodePullRequestDraftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24 108.3c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3c-32.5 10.2-56 40.5-56 76.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3zm8 275.7c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m224 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m48 0c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80M344 80a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-40 192a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
  );
}

export default LanCodePullRequestDraftRegular;
