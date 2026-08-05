import React from 'react';

export function LanPresentationScreenThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v272c0 35.3 28.7 64 64 64h152v59.6l-84.3 53.6c-3.7 2.4-4.8 7.3-2.5 11s7.3 4.8 11 2.5l83.7-53.3 83.7 53.3c3.7 2.4 8.7 1.3 11-2.5s1.3-8.7-2.5-11l-84.3-53.6V384h152c35.3 0 64-28.7 64-64V48h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm456 16v272c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V48z"})
  );
}

export default LanPresentationScreenThin;
