import React from 'react';

export function LanTabletScreenButtonThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 16c26.5 0 48 21.5 48 48v288H16V64c0-26.5 21.5-48 48-48zm48 352v80c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-80zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
  );
}

export default LanTabletScreenButtonThin;
