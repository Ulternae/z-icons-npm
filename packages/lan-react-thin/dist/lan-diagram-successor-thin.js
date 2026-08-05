import React from 'react';

export function LanDiagramSuccessorThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M432 352c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm16 64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zM208 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48zm-5.7-48C215.6 59.7 224 76.9 224 96v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h256c30.9 0 56 25.1 56 56v100.7l50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-64 64c-3.1 3.1-8.2 3.1-11.3 0l-64-64c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l50.4 50.3V88c0-22.1-17.9-40-40-40zM104 376h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanDiagramSuccessorThin;
