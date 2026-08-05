import React from 'react';

export function LanSortAmountDownAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m237.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM296 64h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 128h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanSortAmountDownAltThin;
