import React from 'react';

export function LanWaveSquareRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 88c0-13.3 10.7-24 24-24h152c13.3 0 24 10.7 24 24v312h104V248c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v152c0 13.3-10.7 24-24 24H256c-13.3 0-24-10.7-24-24V112H128v152c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h56z"})
  );
}

export default LanWaveSquareRegular;
