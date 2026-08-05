import React from 'react';

export function LanMergeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 88c0-13.3 10.7-24 24-24h100.3c30 0 58.2 14 76.4 37.8l84.8 111.3c9.1 11.9 23.2 18.9 38.2 18.9h106.4l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H323.7c-15 0-29.1 7-38.2 18.9l-84.8 111.2C182.5 434 154.3 448 124.3 448H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h100.3c15 0 29.1-7 38.2-18.9l84.8-111.3q5.85-7.65 12.9-13.8c-4.7-4.1-9-8.8-12.9-13.8l-84.8-111.3c-9.1-11.9-23.2-18.9-38.2-18.9H24c-13.3 0-24-10.7-24-24"})
  );
}

export default LanMergeRegular;
