import React from 'react';

export function LanYenSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M60.1 42.8C52.8 31.7 38 28.6 26.9 35.9s-14.2 22.2-7 33.2L152.8 272H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v32H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-32h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64.8L364.1 69.2c7.3-11.1 4.2-26-6.9-33.2s-26-4.2-33.2 6.9L192 244.2z"})
  );
}

export default LanYenSignRegular;
