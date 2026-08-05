import React from 'react';

export function LanListSquaresThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M40 64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8zm-24 8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24zm160 16h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 160h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 160h320c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8M88 224H40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m-48-16h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m0 176c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-24 8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24z"})
  );
}

export default LanListSquaresThin;
