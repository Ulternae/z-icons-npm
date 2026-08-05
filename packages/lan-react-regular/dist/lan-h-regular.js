import React from 'react';

export function LanHRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 272v184c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v168H48V56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24V272z"})
  );
}

export default LanHRegular;
