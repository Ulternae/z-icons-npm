import React from 'react';

export function LanArrowUTurnLeftDownRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M177.5 505c-9.4 9.4-24.6 9.4-33.9 0L23.5 385c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l79 79V188c0-103.8 84.2-188 188-188s188 84.2 188 188v236l-.1 2.5c-1.2 12.1-11.5 21.5-23.9 21.5s-22.6-9.4-23.9-21.5l-.1-2.5V188c0-77.3-62.7-140-140-140s-140 62.7-140 140v242.1l79-79 1.8-1.7c9.4-7.7 23.3-7.1 32.1 1.7s9.3 22.7 1.7 32.1l-1.7 1.8-120 120z"})
  );
}

export default LanArrowUTurnLeftDownRegular;
