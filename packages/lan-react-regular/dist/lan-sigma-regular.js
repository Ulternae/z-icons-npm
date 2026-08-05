import React from 'react';

export function LanSigmaRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M1.8 46.8C5.5 37.8 14.3 32 24 32h304c30.9 0 56 25.1 56 56v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-4.4-3.6-8-8-8H81.9L241 239c9.4 9.4 9.4 24.6 0 33.9L81.9 432H328c4.4 0 8-3.6 8-8v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48c0 30.9-25.1 56-56 56H24c-9.7 0-18.5-5.8-22.2-14.8S.2 445.9 7 439l183.1-183L7 73C.2 66.1-1.9 55.8 1.8 46.8"})
  );
}

export default LanSigmaRegular;
