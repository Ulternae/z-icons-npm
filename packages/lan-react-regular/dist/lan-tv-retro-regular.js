import React from 'react';

export function LanTvRetroRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M135 7c9.4-9.4 24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55h126.1c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h126.1l-55-55c-9.4-9.4-9.4-24.6 0-33.9zM64 144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm80 48h160c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m240 40a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanTvRetroRegular;
