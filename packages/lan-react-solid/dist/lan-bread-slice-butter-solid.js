import React from 'react';

export function LanBreadSliceButterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512-24.5 0-24.5 0 192c0 35.3 28.7 64 64 64m118.6 9.4 50.7-50.7c12.5-12.5 32.8-12.5 45.3 0l50.7 50.7c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3"})
  );
}

export default LanBreadSliceButterSolid;
