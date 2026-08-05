import React from 'react';

export function LanYenSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M38.7 35.7c-2.4-3.7-7.3-4.8-11.1-2.4s-4.8 7.3-2.4 11.1L182.5 288H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h96v48H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h96v104c0 4.4 3.6 8 8 8s8-3.6 8-8V368h96c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96v-48h96c4.4 0 8-3.6 8-8s-3.6-8-8-8h-94.5L358.7 44.3c2.4-3.7 1.3-8.7-2.4-11.1s-8.7-1.3-11.1 2.4L192.8 272h-1.6z"})
  );
}

export default LanYenSignThin;
