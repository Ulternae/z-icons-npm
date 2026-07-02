import React from 'react';

export function CoreBedRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M384 160v160h192V192c0-17.7-14.3-32-32-32z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M64 32v288h256V128c0-17.7 14.3-32 32-32h192c53 0 96 43 96 96v288h-64v-96H64v96H0V32zm320 288h192V192c0-17.7-14.3-32-32-32H384zM224 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-128 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
  );
}

export default CoreBedRegularDuo;
