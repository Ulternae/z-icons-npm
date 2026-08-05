import React from 'react';

export function LanVialsThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h24v400c0 53 43 96 96 96s96-43 96-96V16h64v400c0 53 43 96 96 96s96-43 96-96V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm296 16h160v176H304zm-96 0v176H48V16zM48 416V208h160v208c0 44.2-35.8 80-80 80s-80-35.8-80-80m256 0V208h160v208c0 44.2-35.8 80-80 80s-80-35.8-80-80"})
  );
}

export default LanVialsThin;
