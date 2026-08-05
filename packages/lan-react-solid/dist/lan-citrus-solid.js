import React from 'react';

export function LanCitrusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 128h80c53 0 96-43 96-96V16c0-8.8-7.2-16-16-16h-80c-53 0-96 43-96 96v16c0 8.8 7.2 16 16 16m-60-32c0-23.1 5.6-44.8 15.4-64H256C123.5 32 16 139.5 16 272s107.5 240 240 240 240-107.5 240-240c0-45.2-12.5-87.5-34.2-123.6-22.2 14.9-49 23.6-77.8 23.6h-80c-33.1 0-60-26.9-60-60z"})
  );
}

export default LanCitrusSolid;
