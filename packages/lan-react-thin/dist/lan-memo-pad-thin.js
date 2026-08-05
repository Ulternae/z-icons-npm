import React from 'react';

export function LanMemoPadThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 16c26.5 0 48 21.5 48 48v48H16V64c0-26.5 21.5-48 48-48zm48 112v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 216c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.4 0-8 3.6-8 8"})
  );
}

export default LanMemoPadThin;
