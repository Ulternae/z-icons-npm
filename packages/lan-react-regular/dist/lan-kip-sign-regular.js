import React from 'react';

export function LanKipSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M88 32c13.3 0 24 10.7 24 24v154.5L312.3 37.8c10-8.7 25.2-7.5 33.8 2.5s7.5 25.2-2.5 33.8L160.6 232H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H160.6l183.1 157.8c10 8.7 11.2 23.8 2.5 33.8s-23.8 11.2-33.8 2.5L112 301.5V457c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V56c0-13.3 10.7-24 24-24"})
  );
}

export default LanKipSignRegular;
