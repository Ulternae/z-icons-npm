import React from 'react';

export function LanDiagramSankeyRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M327.6 112c-2.5 0-4.8 1.1-6.3 3.1l-68.8 87.5a55.92 55.92 0 0 1-44 21.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h184.4c2.5 0 4.8-1.1 6.3-3.1l68.8-87.5c10.6-13.5 26.8-21.4 44-21.4H520c13.3 0 24 10.7 24 24s-10.7 24-24 24zM212 320l54 76.6c1.5 2.1 3.9 3.4 6.5 3.4H520c13.3 0 24 10.7 24 24s-10.7 24-24 24H272.6c-18.2 0-35.3-8.8-45.8-23.7L153.2 320H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h496c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
  );
}

export default LanDiagramSankeyRegular;
