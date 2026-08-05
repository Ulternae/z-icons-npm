import React from 'react';

export function CorePrintRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 192h384v224h-32V288H96v128H64z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M416 512H96V288h320zm-256-64h192v-96H160zm256-320h32c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64V192H64v224C30.9 416 3.6 390.8.3 358.5L0 352V192c0-35.3 28.7-64 64-64h32V0h320zm-256 0h192V64H160z"})
  );
}

export default CorePrintRegularDuo;
