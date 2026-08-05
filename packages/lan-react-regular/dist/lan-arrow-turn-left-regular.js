import React from 'react';

export function LanArrowTurnLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 424c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-53-43-96-96-96H81.9l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l136 136c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95H416c26.5 0 48 21.5 48 48v96z"})
  );
}

export default LanArrowTurnLeftRegular;
