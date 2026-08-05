import React from 'react';

export function LanTransducerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M248-32c13.3 0 24 10.7 24 24v72c26.5 0 48 21.5 48 48v272h16c26.5 0 48 21.5 48 48v64l-.2 4.9c-2.5 24.2-22.9 43.1-47.8 43.1H48C23.1 544 2.7 525.1.2 500.9L0 496v-64c0-26.5 21.5-48 48-48h16V112c0-26.5 21.5-48 48-48V-8c0-13.3 10.7-24 24-24s24 10.7 24 24v72h64V-8c0-13.3 10.7-24 24-24M48 496h48v-64H48zm96 0h96v-64h-96zm144 0h48v-64h-48zM112 384h160V112H112z"})
  );
}

export default LanTransducerRegular;
