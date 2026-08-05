import React from 'react';

export function LanWaveformRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 0c11.7 0 21.7 8.4 23.7 19.9l55.5 321.7 41.2-257.4c1.8-11.3 11.4-19.8 22.9-20.2s21.6 7.4 24.2 18.6L499.1 272H536c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56c-11.2 0-20.9-7.7-23.4-18.6l-20.3-88.2-44.6 278.6c-1.9 11.6-11.8 20.1-23.6 20.2s-21.8-8.4-23.8-19.9L288 165.3l-56.3 326.8c-2 11.6-12.1 20-23.8 19.9s-21.7-8.6-23.6-20.2l-44.6-278.6-20.3 88.2C116.9 312.3 107.2 320 96 320H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h36.9l43.7-189.4c2.6-11.2 12.7-19 24.2-18.6s21.1 8.9 22.9 20.2l41.2 257.4 55.5-321.7C266.3 8.4 276.3 0 288 0"})
  );
}

export default LanWaveformRegular;
