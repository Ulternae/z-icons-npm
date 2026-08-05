import React from 'react';

export function LanArrowUTurnRightUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M399.5 7c9.4-9.4 24.6-9.4 33.9 0l120 120c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-79-79V324c0 103.8-84.2 188-188 188s-188-84.2-188-188V88l.1-2.5C65.9 73.4 76.1 64 88.5 64s22.6 9.4 23.9 21.5l.1 2.5v236c0 77.3 62.7 140 140 140s140-62.7 140-140V81.9l-79 79-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7s-9.3-22.7-1.7-32.1l1.7-1.8 120-120z"})
  );
}

export default LanArrowUTurnRightUpRegular;
