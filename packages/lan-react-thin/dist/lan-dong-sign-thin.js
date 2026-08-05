import React from 'react';

export function LanDongSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M312 0c-4.4 0-8 3.6-8 8v72H200c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v162c-21.8-39.4-63.8-66-112-66-70.7 0-128 57.3-128 128s57.3 128 128 128c48.2 0 90.2-26.6 112-66v58c0 4.4 3.6 8 8 8s8-3.6 8-8V96h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V8c0-4.4-3.6-8-8-8M80 320a112 112 0 1 1 224 0 112 112 0 1 1-224 0M8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanDongSignThin;
