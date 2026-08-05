import React from 'react';

export function LanNoseThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M163 1.8c3.4-2.8 8.4-2.3 11.2 1.2l245.7 303.5C438.1 329 448 357 448 385.9c0 69.7-56.5 126.2-126.2 126.2L112 512C50.1 512 0 461.9 0 400s50.1-112 112-112h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-53 0-96 43-96 96s43 96 96 96v-24c0-35.3 28.7-64 64-64s64 28.7 64 64v24h81.8c60.8 0 110.2-49.3 110.2-110.2 0-25.2-8.7-49.7-24.5-69.3L161.8 13c-2.8-3.4-2.3-8.4 1.2-11.2M224 496v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48v24z"})
  );
}

export default LanNoseThin;
