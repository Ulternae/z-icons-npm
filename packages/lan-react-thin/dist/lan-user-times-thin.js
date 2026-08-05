import React from 'react';

export function LanUserTimesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 304c97.2 0 176 78.8 176 176v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-88.4-71.6-160-160-160h-96c-88.4 0-160 71.6-160 160v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-97.2 78.8-176 176-176zm-48-48a128 128 0 1 1 0-256 128 128 0 1 1 0 256m325.8-145.2c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-53.8 53.8 53.8 53.8c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L496 187.2 442.2 241c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l53.8-53.8-53.8-53.8c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l53.8 53.8zM224 16a112 112 0 1 0 0 224 112 112 0 1 0 0-224"})
  );
}

export default LanUserTimesThin;
