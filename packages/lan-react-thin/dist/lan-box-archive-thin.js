import React from 'react';

export function LanBoxArchiveThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M472 48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V72c0-13.3 10.7-24 24-24zM0 104c0 19.4 13.7 35.5 32 39.2V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V143.2c18.3-3.7 32-19.8 32-39.2V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72zm48 312V144h416v272c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48m128-192c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanBoxArchiveThin;
