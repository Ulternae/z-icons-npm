import React from 'react';

export function LanChestnutSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M199 45.8c15.4-10.8 35.5-10.8 50.9 0 25.1 17.6 74.3 55.4 117.4 107.7 40 48.6 75.9 111 80.6 182.5H1c4.8-71.5 40.6-134 80.6-182.5 43.1-52.3 92.3-90.1 117.4-107.7M4.5 384h439.9c-14.2 55.2-64.3 96-124 96h-192c-59.6 0-109.8-40.8-124-96z"})
  );
}

export default LanChestnutSolid;
