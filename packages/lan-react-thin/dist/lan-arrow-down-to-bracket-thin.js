import React from 'react';

export function LanArrowDownToBracketThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m381.7 197.7-152 152c-3.1 3.1-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L216 324.7V8c0-4.4 3.6-8 8-8s8 3.6 8 8v316.7l138.3-138.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM16 328v88c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-88c0-4.4 3.6-8 8-8s8 3.6 8 8v88c0 53-43 96-96 96H96c-53 0-96-43-96-96v-88c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanArrowDownToBracketThin;
