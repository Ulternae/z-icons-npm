import React from 'react';

export function LanListRadioRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96m88 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m88 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0M216 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanListRadioRegular;
