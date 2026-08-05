import React from 'react';

export function LanBreadSliceRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 208c-8.8 0-16-7.2-16-16 0-31.6 17.5-58.5 55.6-79.9 38.9-21.9 94.2-34.4 152.4-34.4s113.5 12.5 152.4 34.4c38.1 21.5 55.6 48.4 55.6 79.9 0 8.8-7.2 16-16 16-26.5 0-48 21.5-48 48v176H112V256c0-26.5-21.5-48-48-48m384 96v-48c35.3 0 64-28.7 64-64C512-24.5 0-24.5 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48z"})
  );
}

export default LanBreadSliceRegular;
