import React from 'react';

export function LanPipeValveRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v80H48v-8c0-13.3-10.7-24-24-24S0 170.7 0 184v272c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h416v8c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H280v-80h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80zM48 400V240h416v160z"})
  );
}

export default LanPipeValveRegular;
