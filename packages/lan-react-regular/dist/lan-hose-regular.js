import React from 'react';

export function LanHoseRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 104c0 13.3 10.7 24 24 24s24-10.7 24-24v-2.3l67.3-9.6c4.2 7.1 11.9 11.9 20.7 11.9 13.3 0 24-10.7 24-24V48c0-13.3-10.7-24-24-24-8.8 0-16.6 4.8-20.7 11.9L336 26.3V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v16H124C55.5 40 0 95.5 0 164s55.5 124 124 124h300c13.3 0 24-10.7 24-24s-10.7-24-24-24H124c-42 0-76-34-76-76s34-76 76-76h164zM24 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 112c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanHoseRegular;
