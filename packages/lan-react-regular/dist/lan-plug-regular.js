import React from 'react';

export function LanPlugRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120-32c13.3 0 24 10.7 24 24V96h160V-8c0-13.3 10.7-24 24-24s24 10.7 24 24V96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v80c0 97.9-73.3 178.7-168 190.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.5C105.3 402.7 32 321.9 32 224v-80h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h72V-8c0-13.3 10.7-24 24-24M80 144v80c0 79.5 64.5 144 144 144s144-64.5 144-144v-80z"})
  );
}

export default LanPlugRegular;
