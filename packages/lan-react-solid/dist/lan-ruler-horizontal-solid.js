import React from 'react';

export function LanRulerHorizontalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 384c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h24v104c0 13.3 10.7 24 24 24s24-10.7 24-24V128h48v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v104c0 13.3 10.7 24 24 24s24-10.7 24-24V128h48v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v104c0 13.3 10.7 24 24 24s24-10.7 24-24V128h24c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"})
  );
}

export default LanRulerHorizontalSolid;
