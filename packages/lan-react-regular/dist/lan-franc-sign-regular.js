import React from 'react';

export function LanFrancSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M72 32c-13.3 0-24 10.7-24 24v264H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H96v-80h168c13.3 0 24-10.7 24-24s-10.7-24-24-24H96V80h200c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanFrancSignRegular;
